import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewschoolfeespaymentcreateComponent } from './viewschoolfeespaymentcreate.component';

describe('ViewschoolfeespaymentcreateComponent', () => {
  let component: ViewschoolfeespaymentcreateComponent;
  let fixture: ComponentFixture<ViewschoolfeespaymentcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewschoolfeespaymentcreateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewschoolfeespaymentcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
