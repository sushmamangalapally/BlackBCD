import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Router, ActivatedRoute} from '@angular/router'
import {HttpService} from '../http.service'
import {QuestionsService} from '../questions.service'
import {Question} from '../question'
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  title = "New Question";
  user: User;
  question: Question = new Question()
  questions: Question[] = []
  gettinguser;
  currentUser;
  constructor(public _http: HttpService, public _router: Router, public _question: QuestionsService) { 
    this.user = _http.currentUser
  }

  ngOnInit() {
    console.log("new question.component.ts")
    console.log("new question.component.ts --> user", this.user)
    if(this.user){
      this.gettinguser = this.user.username;
      console.log(this.gettinguser)
      this.currentUser = this.gettinguser    
    }
    else{
      this._router.navigate([''])
    }

    // this._question.find().then(
    //   (data) => {
    //     this.questions = data;
    //   }
    // )
    // .catch((err) => {
    //   console.log("error retrieving questions", err)

    // })
  }

  CreatingQuestion(){
  console.log("creating message", this.question)
  console.log(this.currentUser)
    this.question.userId = this.currentUser
    console.log(this.question)
    this._question.create(this.question)
      .then((data)=>{
        console.log("this is calling in component data", data)
        this.questions.push(data)
        this.question = new Question();
        this._router.navigate(['dashboard'])
      })
  }

}
