import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {


  pathname = "";

  constructor() 
  { 
    this.getpathname()
  }

  ngOnInit() { }

  getpathname(){
    this.pathname=window.location.pathname;
  }


  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Card',
      url: '/about',
      icon: 'card'
    },
    {
      title: 'Transactions',
      url: '/about',
      icon: 'swap-vertical'
    },
    {
      title: 'Settings',
      url: '/about',
      icon: 'settings'
    }
  ];


}
