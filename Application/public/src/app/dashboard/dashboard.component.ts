import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Router, ActivatedRoute} from '@angular/router'
import {HttpService} from '../http.service'
import {QuestionsService} from '../questions.service'
import {Question} from '../question'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  gettinguser;
  questions: Question[] = []
  constructor(public _http: HttpService, public _question: QuestionsService,  public _router: Router) { 
    this.user = _http.currentUser;
  }

  ngOnInit() {
    console.log("hkhk")
    console.log("ing ng", this.user)
    if(this.user){
      this.gettinguser = this.user.username;
      console.log(this.gettinguser)
      // this._http.findingtheUser(this.user).then(
      //   (data) => {
      //     console.log(data, "in callback dashboard method")
      //     console.log(data.username)
      //     this.gettinguser = data.username;
      //   }
      // )        
    }
    else{
      this._router.navigate([''])
    }

    this._question.find()
    .then((data) => {
      console.log("this is calllback for error", data)
      this.questions = data;
    })
    .catch((err) => {
      console.log("error retrieving messages", err)

    })
  }

}
