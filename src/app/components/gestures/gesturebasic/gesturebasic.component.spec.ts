import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GesturebasicComponent } from './gesturebasic.component';

describe('GesturebasicComponent', () => {
  let component: GesturebasicComponent;
  let fixture: ComponentFixture<GesturebasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesturebasicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GesturebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
