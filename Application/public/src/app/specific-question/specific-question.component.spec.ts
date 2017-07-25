import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificQuestionComponent } from './specific-question.component';

describe('SpecificQuestionComponent', () => {
  let component: SpecificQuestionComponent;
  let fixture: ComponentFixture<SpecificQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
