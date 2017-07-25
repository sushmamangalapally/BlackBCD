import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Router, ActivatedRoute} from '@angular/router'
import {HttpService} from '../http.service'
import {QuestionsService} from '../questions.service'
import {Question} from '../question'
import {Answer} from '../answer'
@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {

  questionid;
  info;
  morequestions = [];

  user: User;
  // question: Question = new Question()
  // questions: Question[] = []
  gettinguser;
  currentUser;
  answer: Answer = new Answer();
  constructor(public _http: HttpService, public _question: QuestionsService, private _route: ActivatedRoute, public _router: Router) { 
    this.user = _http.currentUser
    this._route.params.subscribe((param)=>{
      console.log(param.id);
      this.questionid = param.id
    })     
  }

  ngOnInit() {
    this.getthequestion(this.questionid);
    console.log("new question.component.ts --> user", this.user)
    if(this.user){
      this.gettinguser = this.user.username;
      console.log(this.gettinguser)
      this.currentUser = this.gettinguser    
    }
    else{
      this._router.navigate([''])
    }
  }

  getthequestion(questionid){
    this._question.specificQuestion(questionid)
    .then(data => {
      console.log(data)
      this.info = data.question;
    })
  }

  AnswerQuestion(){
    console.log(this.answer)
    this._question.creatingAnswer(this.answer, this.info, this.currentUser)
    .then(question => {this.morequestions.push(question)})
    .catch(err=> {console.log(err)})
    this.answer = new Answer();
    this._router.navigate(['dashboard']);
  }

}
