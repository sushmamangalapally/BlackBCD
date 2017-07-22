import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class UserService {

  constructor(public _http: Http) { 

  }

  getUsers(){
    console.log("USER SERVICE METHOD GET USERS");
    this._http.get("http://localhost:8000/users")
  }

}
