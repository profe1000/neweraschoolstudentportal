import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizviewergameComponent } from './quizviewergame.component';

describe('QuizviewergameComponent', () => {
  let component: QuizviewergameComponent;
  let fixture: ComponentFixture<QuizviewergameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizviewergameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizviewergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
