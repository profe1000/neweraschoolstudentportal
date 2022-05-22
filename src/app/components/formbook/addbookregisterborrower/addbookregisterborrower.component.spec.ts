import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbookregisterborrowerComponent } from './addbookregisterborrower.component';

describe('AddbookregisterborrowerComponent', () => {
  let component: AddbookregisterborrowerComponent;
  let fixture: ComponentFixture<AddbookregisterborrowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookregisterborrowerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbookregisterborrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
