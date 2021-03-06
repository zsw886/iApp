import { Component } from '@angular/core';
import { NavController, MenuController,ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ItemDetailsPage } from '../product-eva/item-details';
import { Gallery } from '../../models/gallery';
import { SurfService } from "../../service/services";

/*
  Generated class for the ProductEva page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-eva',
  providers: [SurfService,Gallery],
  templateUrl: 'product-eva.html'
})
export class ProductEvaPage {
  product: string = "month";
  items: any;
  


constructor(public navCtrl: NavController, 
  public menuCtrl: MenuController,
  public surfService: SurfService,
  public gallery: Gallery) {
    this.menuCtrl.swipeEnable(false);
    this.items = gallery.items;
    //let ss = this.surfService.getLastSurf();
    console.log(this.items[0]);
  }

ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }

itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
