import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultprintPage } from './resultprint.page';

describe('ResultprintPage', () => {
  let component: ResultprintPage;
  let fixture: ComponentFixture<ResultprintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultprintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
