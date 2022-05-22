import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VieweventhomeComponent } from './vieweventhome.component';

describe('VieweventhomeComponent', () => {
  let component: VieweventhomeComponent;
  let fixture: ComponentFixture<VieweventhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweventhomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VieweventhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
