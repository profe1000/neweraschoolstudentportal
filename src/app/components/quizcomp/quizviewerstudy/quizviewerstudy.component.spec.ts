import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizviewerstudyComponent } from './quizviewerstudy.component';

describe('QuizviewerstudyComponent', () => {
  let component: QuizviewerstudyComponent;
  let fixture: ComponentFixture<QuizviewerstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizviewerstudyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizviewerstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
