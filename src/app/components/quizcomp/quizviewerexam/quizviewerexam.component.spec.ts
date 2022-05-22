import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizviewerexamComponent } from './quizviewerexam.component';

describe('QuizviewerexamComponent', () => {
  let component: QuizviewerexamComponent;
  let fixture: ComponentFixture<QuizviewerexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizviewerexamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizviewerexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
