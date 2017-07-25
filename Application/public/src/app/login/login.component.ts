import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {HttpService} from '../http.service'
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  moreusers = [];
  constructor(public _http: HttpService, public _router: Router) { }

  ngOnInit() {
  }

  register(){
    console.log("what's up in regsiter")
    console.log(this.user, "register method")
    this._http.registerUser(this.user)
    .then((data) =>{
      (user) => {this.moreusers.push(user)}
      console.log(data, "callback from login request")
      this.user = data
      this._router.navigate(['dashboard'])
    })
    .catch((err) => {
      console.log(err, "status was an error catch trigger")
    })
    //this.user = new User();
  }  

}
