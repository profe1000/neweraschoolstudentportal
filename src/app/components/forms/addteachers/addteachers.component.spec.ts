import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddteachersComponent } from './addteachers.component';

describe('AddteachersComponent', () => {
  let component: AddteachersComponent;
  let fixture: ComponentFixture<AddteachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteachersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
