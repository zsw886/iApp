import { Component,ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ProductPage;  
  tab3Root: any = InfoPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
