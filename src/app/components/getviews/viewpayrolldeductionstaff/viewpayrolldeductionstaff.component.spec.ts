import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpayrolldeductionstaffComponent } from './viewpayrolldeductionstaff.component';

describe('ViewpayrolldeductionstaffComponent', () => {
  let component: ViewpayrolldeductionstaffComponent;
  let fixture: ComponentFixture<ViewpayrolldeductionstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpayrolldeductionstaffComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpayrolldeductionstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
