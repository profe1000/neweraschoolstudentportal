import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewsfeesmanagementComponent } from './viewsfeesmanagement.component';

describe('ViewsfeesmanagementComponent', () => {
  let component: ViewsfeesmanagementComponent;
  let fixture: ComponentFixture<ViewsfeesmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsfeesmanagementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewsfeesmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
