import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpayrolldeductionmodelComponent } from './addpayrolldeductionmodel.component';

describe('AddpayrolldeductionmodelComponent', () => {
  let component: AddpayrolldeductionmodelComponent;
  let fixture: ComponentFixture<AddpayrolldeductionmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpayrolldeductionmodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpayrolldeductionmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
