import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditquizComponent } from './editquiz.component';

describe('EditquizComponent', () => {
  let component: EditquizComponent;
  let fixture: ComponentFixture<EditquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditquizComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
