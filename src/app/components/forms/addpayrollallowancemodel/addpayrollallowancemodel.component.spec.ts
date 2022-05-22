import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpayrollallowancemodelComponent } from './addpayrollallowancemodel.component';

describe('AddpayrollallowancemodelComponent', () => {
  let component: AddpayrollallowancemodelComponent;
  let fixture: ComponentFixture<AddpayrollallowancemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpayrollallowancemodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpayrollallowancemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
