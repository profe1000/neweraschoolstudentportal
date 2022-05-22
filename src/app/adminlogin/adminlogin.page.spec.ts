import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginPage } from './adminlogin.page';

describe('AdminloginPage', () => {
  let component: AdminloginPage;
  let fixture: ComponentFixture<AdminloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
