import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsupplementaryincomeComponent } from './addsupplementaryincome.component';

describe('AddsupplementaryincomeComponent', () => {
  let component: AddsupplementaryincomeComponent;
  let fixture: ComponentFixture<AddsupplementaryincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupplementaryincomeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsupplementaryincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
