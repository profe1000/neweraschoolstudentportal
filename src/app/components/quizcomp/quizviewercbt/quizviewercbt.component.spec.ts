import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizviewercbtComponent } from './quizviewercbt.component';

describe('QuizviewercbtComponent', () => {
  let component: QuizviewercbtComponent;
  let fixture: ComponentFixture<QuizviewercbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizviewercbtComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizviewercbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
