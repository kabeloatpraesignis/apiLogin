import { Component, OnInit } from '@angular/core';
import { LoginService } from '../data/login.service';
import { LoginModel } from './data/login-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new LoginModel;
  myData:any;
  person:any=[];
  constructor(private dataService:LoginService) { }

  ngOnInit(): void {
    this.login();
  }

  login(){

    return this.dataService.getData(this.loginModel.name,this.loginModel.password).subscribe(


    {next: userData => {

      this.myData = userData;
      if (this.myData.length == 0){
        // alert('No such person exists');
        this.loginModel = new LoginModel;
        return;
      }


      const resultArray = Object.keys(this.myData).map(index => {


        this.person.push(this.myData[index]);
        alert(this.person.length);

        console.log(this.person);
        this.loginModel= this.person[0];
        // this.person;
    });

    },}
    );
  }
}
