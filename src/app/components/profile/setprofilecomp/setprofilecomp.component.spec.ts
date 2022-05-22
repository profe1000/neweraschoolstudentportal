import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetprofilecompComponent } from './setprofilecomp.component';

describe('SetprofilecompComponent', () => {
  let component: SetprofilecompComponent;
  let fixture: ComponentFixture<SetprofilecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetprofilecompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetprofilecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
