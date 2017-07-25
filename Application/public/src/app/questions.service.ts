import { Injectable } from '@angular/core';
import {User} from "./user";
import 'rxjs/Rx'
import {Http} from '@angular/http';
import {Question} from './question'
@Injectable()
export class QuestionsService {

  constructor(public _http: Http) { }

  find(){
    return this._http.get('/allquestions')
    .map(data => data.json())
    .toPromise(); 
  }

  create(thequestion){
    console.log(thequestion, "this is create method for question")
    return this._http.post('/addquestions', {thequestion: thequestion}).map(data => data.json()).toPromise();
  }

  specificQuestion(questionid){
    return this._http.post('/gettingquestion', {questionid: questionid}).map(data => data.json()).toPromise();    
  }

  creatingAnswer(answer, question, user){
    console.log(answer)
    return this._http.post('/answeringquestion', {answer: answer,question: question, user: user}).map(data => data.json()).toPromise();        
  }

}
