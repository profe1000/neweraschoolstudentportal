import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetprofilePage } from './setprofile.page';

describe('SetprofilePage', () => {
  let component: SetprofilePage;
  let fixture: ComponentFixture<SetprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
