import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadidComponent } from './uploadid.component';

describe('UploadidComponent', () => {
  let component: UploadidComponent;
  let fixture: ComponentFixture<UploadidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadidComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
