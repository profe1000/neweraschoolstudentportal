import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultsinglePage } from './resultsingle.page';

describe('ResultsinglePage', () => {
  let component: ResultsinglePage;
  let fixture: ComponentFixture<ResultsinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
