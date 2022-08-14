import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideosplayerPage } from './videosplayer.page';

describe('VideosplayerPage', () => {
  let component: VideosplayerPage;
  let fixture: ComponentFixture<VideosplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideosplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
