
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { InfoDetailPage } from '../info/info-detail';
import { Gallery } from '../../models/gallery';


@Component({
  selector: 'page-info',
  providers: [Gallery],
  templateUrl: 'info.html'
})
export class InfoPage {

  news:any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public gallery: Gallery) {
    this.news = gallery.news;
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(InfoDetailPage, {
      item: item
    });
    console.log(item);
  }
}


