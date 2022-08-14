import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectservercomparraysComponent } from './selectservercomparrays.component';

describe('SelectservercomparraysComponent', () => {
  let component: SelectservercomparraysComponent;
  let fixture: ComponentFixture<SelectservercomparraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectservercomparraysComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectservercomparraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
