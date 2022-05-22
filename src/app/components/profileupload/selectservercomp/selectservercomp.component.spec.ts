import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectservercompComponent } from './selectservercomp.component';

describe('SelectservercompComponent', () => {
  let component: SelectservercompComponent;
  let fixture: ComponentFixture<SelectservercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectservercompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectservercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
