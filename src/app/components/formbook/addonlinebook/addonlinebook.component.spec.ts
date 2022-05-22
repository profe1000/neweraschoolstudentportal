import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddonlinebookComponent } from './addonlinebook.component';

describe('AddonlinebookComponent', () => {
  let component: AddonlinebookComponent;
  let fixture: ComponentFixture<AddonlinebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonlinebookComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddonlinebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
