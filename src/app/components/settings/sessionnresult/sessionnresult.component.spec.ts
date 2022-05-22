import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionnresultComponent } from './sessionnresult.component';

describe('SessionnresultComponent', () => {
  let component: SessionnresultComponent;
  let fixture: ComponentFixture<SessionnresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionnresultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionnresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
