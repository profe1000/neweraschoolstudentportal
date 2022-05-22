import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbookborrowerrequestComponent } from './addbookborrowerrequest.component';

describe('AddbookborrowerrequestComponent', () => {
  let component: AddbookborrowerrequestComponent;
  let fixture: ComponentFixture<AddbookborrowerrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookborrowerrequestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbookborrowerrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
