import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GestureController, DomController, IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-gesturebasic',
  templateUrl: './gesturebasic.component.html',
  styleUrls: ['./gesturebasic.component.scss'],
})
export class GesturebasicComponent implements OnInit {

  @ViewChild('textelement', {read:ElementRef}) textelement: ElementRef;
  @ViewChild(IonHeader, { read: ElementRef }) header: ElementRef

  @ViewChild('powerBtn', { read: ElementRef }) powerBtn: ElementRef;
  power = 0;
  longPressActive = false;
  
  constructor(private gestureCtrl:GestureController, private domCtrl: DomController) { }

  ngOnInit() {}

  async ngAfterViewInit() {
    // Use DomCtrl to get the correct header height
    await this.domCtrl.read(() => {
      this.startlongpressgesture();
    });
  }


  async startmovegesture() {
    const gesture = this.gestureCtrl.create({
      el: this.textelement.nativeElement,
      threshold: 0,
      gestureName: 'move',
      onStart: ev => {
        console.log('move start!');
      },
      onMove: ev => {
        console.log(ev);

        const currentX = ev.currentX;
        const currentY = ev.currentY;

        this.textelement.nativeElement.style.transform = `translate(${currentX}px, ${currentY-60}px)`;
      },
      onEnd: ev => {
        console.log('move end!');
      }
    });
    gesture.enable();
  }


  async startswipegesture() {
    const gesture = this.gestureCtrl.create({
      el: this.textelement.nativeElement,
      threshold: 0,
      gestureName: 'swipe',
      direction:'y',
      onStart: ev => {
        console.log('swipe start!');
      },
      onMove: ev => {
        console.log(ev);

        const currentX = ev.currentX;
        const currentY = ev.currentY;

        let changex= ev.deltaX;
        let changey= ev.deltaY;

        this.textelement.nativeElement.style.transform = `translate(${0}px, ${changey}px)`;
      },
      onEnd: ev => {
        console.log('swipe end!');
      }
    });
    gesture.enable();
  }


  async startlongpressgesture() {
    const longPress = this.gestureCtrl.create({
      el: this.powerBtn.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: ev => {
        this.longPressActive = true;
        this.increasePower();
      },
      onEnd: ev => {
        this.longPressActive = false;
        this.power=0;
      }
    }, true); // Passing true will run the gesture callback inside of NgZone!

    // Don't forget to enable!
    longPress.enable(true);
  }

  increasePower(timeout = 200) {
    setTimeout(() => {
      if (this.longPressActive) {
          this.power++;
          this.increasePower(timeout/1.2);
      }
    }, timeout);
  }
 

  transform(){
  
    const drawer=this.textelement.nativeElement;

     //drawer.style.setProperty('bottom', "0px")

     drawer.style.setProperty('transform', "translate(0px, 500px)")

     drawer.style.setProperty('transition', "width 2s, height 4s, transform 2s")

     console.log(1)
    
  }

}
