import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import {HttpService} from './http.service'
import {QuestionsService} from './questions.service'

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { SpecificQuestionComponent } from './specific-question/specific-question.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "addaquestion", component: NewQuestionComponent},
  {path: "question/:id",  component: SpecificQuestionComponent},
  {path: "question/new_answer/:id", component: AnswerQuestionComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewQuestionComponent,
    SpecificQuestionComponent,
    AnswerQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
