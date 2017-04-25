import { Component } from '@angular/core';
import { Gallery } from '../../models/gallery';
import {NavController,  NavParams} from 'ionic-angular';
import {Transfer } from 'ionic-native';
import {ActionSheetController} from 'ionic-angular';

@Component({
  providers: [Gallery],
  templateUrl: 'info-detail.html'
})
export class InfoDetailPage { 
    selectedNews: any;

    // 定义构造函数
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    navParams: NavParams,public gallery: Gallery) {
    this.selectedNews = navParams.get('item');
    console.log(this.selectedNews);
  }

}