import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpayrolldeductionmodelComponent } from './viewpayrolldeductionmodel.component';

describe('ViewpayrolldeductionmodelComponent', () => {
  let component: ViewpayrolldeductionmodelComponent;
  let fixture: ComponentFixture<ViewpayrolldeductionmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpayrolldeductionmodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpayrolldeductionmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
