import { Injectable } from '@angular/core';
import {User} from "./user";
import 'rxjs/Rx'
import {Http} from '@angular/http';
@Injectable()
export class HttpService {
  currentUser: User = null;
  constructor(public _http: Http) { }

  registerUser(user: User){
    console.log(user, "user registeration from service")
    if(this.currentUser == null){
      this.currentUser = user;
    }
    return this._http.post('/register', user).map(data => data.json()).toPromise();
    // bubbles.then((data) => {
    //   this.currentUser = data.user;
    // })
    // return bubbles;
  }

  findingtheUser(thatuser){
    console.log("we're finding user for logging in from http.service.ts")
    console.log(thatuser)
    this.currentUser = thatuser;
    console.log(thatuser)
    return this._http.post('/findinguser', {thatuser: thatuser}).map(data=>data.json()).toPromise();
  }

}
