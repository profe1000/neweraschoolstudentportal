import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpayrolldeductionmodelComponent } from './editpayrolldeductionmodel.component';

describe('EditpayrolldeductionmodelComponent', () => {
  let component: EditpayrolldeductionmodelComponent;
  let fixture: ComponentFixture<EditpayrolldeductionmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpayrolldeductionmodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpayrolldeductionmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
