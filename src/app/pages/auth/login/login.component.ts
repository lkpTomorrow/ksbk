import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as CryptoJS from 'crypto-js';
import {Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd"; // 登录加密
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router:Router,
              private nzMessageService:NzMessageService) {
  }

  validateForm: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

  /**
   * 登录
   */
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let userName = this.validateForm.value.userName,
      password = this.validateForm.value.password;
    if(!userName||!password){
      return;
    }
    let params={
      userName:this.encryptByDES(userName),
      passWord:this.encryptByDES(password),
    };
    console.log(params);
    console.log(params.userName == 'KWSS3vEB2hE=');
    console.log(params.passWord=='F8O68fsPPus=');
    // 调用接口，但是目前没有，只能用来假数据了。
    if(params.userName=='KWSS3vEB2hE='&&params.passWord=='F8O68fsPPus='){
      this.router.navigate(['/pages/dashboard/index']);
    }else{
      this.nzMessageService.error("密码错误");
    }
  }





  /**
   * 3des加密，使用：this.encryptByDES("helloworld")
   * @param message
   * @returns {any}
   */
  encryptByDES(message) {
    var keyHex = CryptoJS.enc.Utf8.parse("key123456");
    var encrypted = CryptoJS.TripleDES.encrypt(message, keyHex, {
      iv: CryptoJS.enc.Utf8.parse('7254567-'),  // 好像没用
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }
}
