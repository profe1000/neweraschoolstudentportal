import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditparentComponent } from './editparent.component';

describe('EditparentComponent', () => {
  let component: EditparentComponent;
  let fixture: ComponentFixture<EditparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditparentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
