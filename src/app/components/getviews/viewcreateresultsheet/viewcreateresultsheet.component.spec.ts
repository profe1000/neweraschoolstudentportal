import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcreateresultsheetComponent } from './viewcreateresultsheet.component';

describe('ViewcreateresultsheetComponent', () => {
  let component: ViewcreateresultsheetComponent;
  let fixture: ComponentFixture<ViewcreateresultsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcreateresultsheetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcreateresultsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
