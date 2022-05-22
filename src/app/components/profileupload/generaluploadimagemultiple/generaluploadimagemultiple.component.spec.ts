import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneraluploadimagemultipleComponent } from './generaluploadimagemultiple.component';

describe('GeneraluploadimagemultipleComponent', () => {
  let component: GeneraluploadimagemultipleComponent;
  let fixture: ComponentFixture<GeneraluploadimagemultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneraluploadimagemultipleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraluploadimagemultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
