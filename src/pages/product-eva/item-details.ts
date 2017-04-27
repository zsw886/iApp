import {Component} from '@angular/core';
import {NavController,  NavParams} from 'ionic-angular';
//import {SexyService} from './../../app.service';
import {Transfer } from 'ionic-native';
import {ActionSheetController} from 'ionic-angular';
import { Gallery } from '../../models/gallery';
//import { SurfService } from "../../service/services";

// 定义cordova
declare var cordova: any;

@Component({
  selector: 'item-details',
  providers :[Gallery],//SurfService,
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  //用来接收上一个页面传递过来的参数 any为任意类型
  selectedItem: any;

  //定义图片集合
  items: any;

  // 定义构造函数
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    //public surfService: SurfService,
    navParams: NavParams,public gallery: Gallery) {

    //this.selectedItem = navParams.get('item');
    this.items = gallery.items;
  }

  // 获取图片集合
//  getDetails() {
//     this.surfService.getLastSurf().then(data => {
//       this.items = data;
//     })
//   }

  // 点击图片时
  itemTapped(event, item) {
    var imgSrc = "assets/images/eva/meteo/day/"+item.image;
    console.log(item.image);
    this.presentActionSheet(imgSrc);
  }

  // 弹出选择框
  presentActionSheet(imgUrl:string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '提示',
      buttons: [
        {
          text: '保存到相册',
          role: 'destructive',
          handler: () => {
            this.saveImage(imgUrl);
            console.log('Destructive clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  saveImage(imgUrl) {
    // 取出图片的文件名
    var filename = imgUrl.split("/").pop();
    var targetPath = cordova.file.externalRootDirectory + "DCIM/Camera/" + filename;
    // this.fileTransfer.download(imgUrl, targetPath, true, {}).then(res => {
    //   alert("保存成功");
    // }).catch(reason => {
    //   alert(reason);
    // })
  }

}
