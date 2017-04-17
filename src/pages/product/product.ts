import { Component,ViewChild  } from '@angular/core';
import { Nav,NavController } from 'ionic-angular';
import { ProductEvaPage } from "../product-eva/product-eva";
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  @ViewChild(Nav) nav:Nav;
  backButtonPressed: boolean = false;

  constructor(public navCtrl: NavController) {

  }
openPage(event,item) {
this.navCtrl.push(ProductEvaPage, {
      item: item
    });
  }
}
