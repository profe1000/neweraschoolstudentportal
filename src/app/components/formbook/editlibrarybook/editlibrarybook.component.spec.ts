import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditlibrarybookComponent } from './editlibrarybook.component';

describe('EditlibrarybookComponent', () => {
  let component: EditlibrarybookComponent;
  let fixture: ComponentFixture<EditlibrarybookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlibrarybookComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditlibrarybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
