import { Component } from '@angular/core';
import { NavController, MenuController,ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
/*
  Generated class for the ProductEva page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-eva',
  templateUrl: 'product-eva.html'
})
export class ProductEvaPage {

  product: string = "month";

products = [
    {
      title: "降水量要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/prec.jpg",
    },
    {
      title: "降水距平要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/prec_a.jpg",
    },
    {
      title: "平均气温要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/temp.jpg",
    },
    {
      title: "气温距平要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/temp_a.jpg",
    },
    {
      title: "照时数要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/sun.jpg",
    },
    {
      title: "日照时数距平要素",
      description: "",
      image: "assets/images/eva/meteo/day/2017/01/29/sun_a.jpg",
    }
  ];

constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }

ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }
}
