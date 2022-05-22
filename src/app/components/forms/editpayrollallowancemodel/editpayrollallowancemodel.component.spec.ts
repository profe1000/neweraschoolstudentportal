import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpayrollallowancemodelComponent } from './editpayrollallowancemodel.component';

describe('EditpayrollallowancemodelComponent', () => {
  let component: EditpayrollallowancemodelComponent;
  let fixture: ComponentFixture<EditpayrollallowancemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpayrollallowancemodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpayrollallowancemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
