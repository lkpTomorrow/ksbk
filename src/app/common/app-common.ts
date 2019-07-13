import {sesssion} from '../widget/script/session';


export class AppCommon {
  // 用户信息
  private static _userInfo;

  static get userInfo() {
    if (!this._userInfo) {
      this._userInfo = sesssion.get('_userInfo');
    }
    return this._userInfo;
  }

  static set userInfo(value) {
    this._userInfo = value;
    sesssion.set('userInfo', value);
  }
}
