import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpayrollallowancestaffComponent } from './viewpayrollallowancestaff.component';

describe('ViewpayrollallowancestaffComponent', () => {
  let component: ViewpayrollallowancestaffComponent;
  let fixture: ComponentFixture<ViewpayrollallowancestaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpayrollallowancestaffComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpayrollallowancestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
