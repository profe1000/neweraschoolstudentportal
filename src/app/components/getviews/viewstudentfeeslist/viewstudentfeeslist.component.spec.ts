import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewstudentfeeslistComponent } from './viewstudentfeeslist.component';

describe('ViewstudentfeeslistComponent', () => {
  let component: ViewstudentfeeslistComponent;
  let fixture: ComponentFixture<ViewstudentfeeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstudentfeeslistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewstudentfeeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
