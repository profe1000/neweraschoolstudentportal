import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolblogPage } from './schoolblog.page';

describe('SchoolblogPage', () => {
  let component: SchoolblogPage;
  let fixture: ComponentFixture<SchoolblogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolblogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
