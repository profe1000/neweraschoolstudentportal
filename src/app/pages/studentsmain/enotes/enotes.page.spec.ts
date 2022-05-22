import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnotesPage } from './enotes.page';

describe('EnotesPage', () => {
  let component: EnotesPage;
  let fixture: ComponentFixture<EnotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
