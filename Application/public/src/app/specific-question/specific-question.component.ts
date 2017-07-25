import { Component, OnInit } from '@angular/core';
import {User} from "../user"
import {Router, ActivatedRoute} from '@angular/router'
import {HttpService} from '../http.service'
import {QuestionsService} from '../questions.service'
import {Question} from '../question'
@Component({
  selector: 'app-specific-question',
  templateUrl: './specific-question.component.html',
  styleUrls: ['./specific-question.component.css']
})
export class SpecificQuestionComponent implements OnInit {
  questionid;
  info;
  constructor(public _http: HttpService, public _question: QuestionsService, private _route: ActivatedRoute, public _router: Router) { 
    this._route.params.subscribe((param)=>{
      console.log(param.id);
      this.questionid = param.id
    })     
  }

  ngOnInit() {
    this.getthequestion(this.questionid);
  }

  getthequestion(questionid){
    this._question.specificQuestion(questionid)
    .then(data => {
      console.log(data)
      this.info = data.question;
    })
  }

}
