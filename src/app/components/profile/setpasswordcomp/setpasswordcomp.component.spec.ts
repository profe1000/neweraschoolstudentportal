import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetpasswordcompComponent } from './setpasswordcomp.component';

describe('SetpasswordcompComponent', () => {
  let component: SetpasswordcompComponent;
  let fixture: ComponentFixture<SetpasswordcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpasswordcompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetpasswordcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
