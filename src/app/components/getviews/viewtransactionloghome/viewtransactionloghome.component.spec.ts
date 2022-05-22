import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewtransactionloghomeComponent } from './viewtransactionloghome.component';

describe('ViewtransactionloghomeComponent', () => {
  let component: ViewtransactionloghomeComponent;
  let fixture: ComponentFixture<ViewtransactionloghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransactionloghomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewtransactionloghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
