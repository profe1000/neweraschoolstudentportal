import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddassignmentanswerComponent } from './addassignmentanswer.component';

describe('AddassignmentanswerComponent', () => {
  let component: AddassignmentanswerComponent;
  let fixture: ComponentFixture<AddassignmentanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassignmentanswerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddassignmentanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
