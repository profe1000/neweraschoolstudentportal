import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpayrollallowancemodelComponent } from './viewpayrollallowancemodel.component';

describe('ViewpayrollallowancemodelComponent', () => {
  let component: ViewpayrollallowancemodelComponent;
  let fixture: ComponentFixture<ViewpayrollallowancemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpayrollallowancemodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpayrollallowancemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
