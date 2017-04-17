import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { InfoPage } from '../pages/info/info';
import { ContactPage } from '../pages/contact/contact';
import { ProductPage } from '../pages/product/product';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { ProductEvaPage } from '../pages/product-eva/product-eva';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InfoPage,
    ContactPage,
    HomePage,
    ProductPage,
    BaiduMapPage,
    ProductEvaPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InfoPage,
    ContactPage,
    ProductPage,
    HomePage,
    BaiduMapPage,
    ProductEvaPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
