import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditclassComponent } from './editclass.component';

describe('EditclassComponent', () => {
  let component: EditclassComponent;
  let fixture: ComponentFixture<EditclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditclassComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
