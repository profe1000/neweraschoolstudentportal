import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizsinglePage } from './quizsingle.page';

describe('QuizsinglePage', () => {
  let component: QuizsinglePage;
  let fixture: ComponentFixture<QuizsinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizsinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizsinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
