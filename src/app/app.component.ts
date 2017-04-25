import { Component,ViewChild } from '@angular/core';
import { Nav,Platform,ToastController,MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { GeolocationPage } from '../pages/geolocation/geolocation.page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav:Nav;
  pages: Array<{ title: string, icon: string, component: any }>;
  backButtonPressed: boolean = false;
  
  // constructor(platform: Platform) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();

  //     this.pages = [
  //     { title: '百度地图', icon: 'md-map', component: BaiduMapPage }
  //   ];
  //   });
  // }

  constructor(public platform: Platform, public toastCtrl: ToastController, public menuCtrl: MenuController) {
    this.initializeApp();

    this.pages = [
      { title: '定位', icon: 'locate', component: GeolocationPage },
      { title: '地图浏览', icon: 'md-map', component: BaiduMapPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.platform.registerBackButtonAction((): any => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;

        if (this.menuCtrl.isOpen()) return this.menuCtrl.close();

        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            //当前页面为tabs，退出APP
            return this.showExit();
          }
          //当前页面为tabs的子页面，正常返回
          return this.nav.pop();
        }

        let tabs = page.tabs;
        let activeNav = tabs.getSelected();

        if (!activeNav.canGoBack()) {
          //当前页面为tab栏，退出APP
          return this.showExit();
        }
        //当前页面为tab栏的子页面，正常返回
        return activeNav.pop();
      }, 101);
    });
  }

  showExit() {
    if (this.backButtonPressed) this.platform.exitApp();
    else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000)
    }
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
