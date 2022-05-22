import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnotesviewerPage } from './enotesviewer.page';

describe('EnotesviewerPage', () => {
  let component: EnotesviewerPage;
  let fixture: ComponentFixture<EnotesviewerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnotesviewerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnotesviewerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
