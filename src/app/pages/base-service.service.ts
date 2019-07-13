import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


/*
import '../widget/script/base64.js';
declare var Base64: any;

// 使用： new Base64().encode('abc');
*/

import {Base64} from 'js-base64';
// 使用：Base64.encode('abc');

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(public http: HttpClient,
              public router: Router,) {
  }

  public jsonCall(data, url, type): any {
    console.log(this.http);
    console.log('jsonCall执行了');
    return new Promise((resolve, reject) => {
      if (type === 'get' || type === 'delete') {
        console.log('http:', this.http);
        this.http[type](url, {
          headers: new HttpHeaders({
            currentA: 'AAA',
            currentB: 'BBB'
          }),
          observe: 'response',
          params: data
        })
          .toPromise()
          .then(res => {
            console.log('get-then里面的res：', res);
            if (res.status === 200) {
              this.handleSuccess(resolve, reject, res);
            }
          })
          .catch(res => {
            console.log('get-catch里面的res：', res);
            this.handleError(resolve, reject, res);
          });
      } else {
        this.http[type](url, data, {
          headers: new HttpHeaders({
            currentA: 'AAA-post',
            currentB: 'BBB-post'
          }),
          observe: 'response',
          params: {ksName: 'ks'}, // 这样也会拼接在url后面（我们的分页就是这种情况）
        })
          .toPromise()
          .then(res => {
            console.log('post-then里面的res：', res);
            if (res.status === 200) {
              this.handleSuccess(resolve, reject, res);
            }
          })
          .catch(res => {
            console.log('post-catch里面的res：', res);
            this.handleError(resolve, reject, res);
          });
      }
    });
  }

  handleSuccess(resolve, reject, res) {
    console.log('进入success里面');
    const status_code = res.headers.get('status_code'); // 若果没有，那么值为null
    const totalNum = res.headers.get('x-total-count'); // 如果没有，那么值为null
    //  其中： null==undefined :true;    null==null :true
    //        null===undefined :false;   null===null :true
    console.log('status_code：', status_code, 'totalNum：', totalNum);
    if (status_code == 200 || !status_code) { // status_code返回为数值型，但是get以后，变为字符型；所以没用===
      if (totalNum !== null) {
        // 分页的情况
        console.log('有分页的情况');
        resolve({data: res.body, total: totalNum || 0});
      } else {
        console.log('没有分页的情况');
        console.log('body是不是json格式的：', res.body);
        resolve(res.body || null);
      }
    } else {
      console.log(Base64);
      const status_msg = res.headers.get('status_msg');
      const error_msg = Base64.decode(status_msg);
      resolve({error_msg: error_msg, error_code: status_code});
    }
  }

  handleError(resolve, reject, res) {
    console.log('handleError的情况：', res);
    if (!!res && res.status === 401) {
      // 登出
      this.logout();
      console.log('401的情况');
      return;
    }
    if (!!res && res.status === 404) {
      resolve({error_msg: 'not found'});
      return;
    }
    let error_msg = '服务异常-ksbk';
    const status_msg = res.headers.get('status_msg'); // || '服务异常-ksbk'
    if (!!status_msg) {
      error_msg = Base64.decode(status_msg);
    }
    resolve({error_msg: error_msg});
  }

// logout
  logout() {
    // AppCommon.userInfo = null;
    this.router.navigate(['gyauth/login']); // 401的时候，cookie里面的信息自动已经清除了。

  }

}
