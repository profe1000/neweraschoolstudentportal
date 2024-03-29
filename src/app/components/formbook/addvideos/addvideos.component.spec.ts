import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddvideosComponent } from './addvideos.component';

describe('AddvideosComponent', () => {
  let component: AddvideosComponent;
  let fixture: ComponentFixture<AddvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvideosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
