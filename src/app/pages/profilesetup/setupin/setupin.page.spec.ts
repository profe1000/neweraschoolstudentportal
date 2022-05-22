import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetupinPage } from './setupin.page';

describe('SetupinPage', () => {
  let component: SetupinPage;
  let fixture: ComponentFixture<SetupinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetupinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
