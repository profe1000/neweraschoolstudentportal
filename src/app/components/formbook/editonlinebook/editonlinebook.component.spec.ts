import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditonlinebookComponent } from './editonlinebook.component';

describe('EditonlinebookComponent', () => {
  let component: EditonlinebookComponent;
  let fixture: ComponentFixture<EditonlinebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditonlinebookComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditonlinebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
