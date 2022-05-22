import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultviewerprintComponent } from './resultviewerprint.component';

describe('ResultviewerprintComponent', () => {
  let component: ResultviewerprintComponent;
  let fixture: ComponentFixture<ResultviewerprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultviewerprintComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultviewerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
