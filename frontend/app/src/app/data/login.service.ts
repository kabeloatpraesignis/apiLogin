import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginModel } from '../login/data/login-model';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginData = new LoginModel;
  constructor(private httpclient:HttpClient) { }

   getData(name:string,password:string) {
     const correct = 'http://127.0.0.1:8000/api/myuserlogin/'+name+'/'+password;

    const apiUrl = this.httpclient.get(correct);
    console.log(apiUrl);
    return apiUrl;
   }
}
