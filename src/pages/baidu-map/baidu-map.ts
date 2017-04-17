import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController,ToastController } from 'ionic-angular';

/*
  Generated class for the BaiduMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var BMap, BDLocation;
@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.menuCtrl.swipeEnable(false);
  }
  getLocation() {
    let that = this;
    BDLocation.watch({ gps: true },
      (suc) => {
        if (suc.data) {
          this.map.centerAndZoom(new BMap.Point(suc.data.longitude, suc.data.latitude), 15);
          let pt = new BMap.Point(suc.data.longitude, suc.data.latitude);
          let marker2 = new BMap.Marker(pt);
          this.map.addOverlay(marker2);
        } else {
          that.showToast('定位失败，请检查应用权限设置！');
        }
        BDLocation.stop(suc => {

        }, err => {

        });

      }, (err) => {
        that.showToast('定位失败，请检查应用权限设置！');
      }
    )
  }
  ionViewDidLoad() {
    this.map = new BMap.Map("Bmap");
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    this.map.addControl(new BMap.NavigationControl());
    this.map.enableScrollWheelZoom(true);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  ionViewWillEnter() {
    let map = this.map = new BMap.Map(this.mapElement.nativeElement, { enableMapClick: true });//创建地图实例
    
    let point = new BMap.Point(116.404, 39.915);//坐标可以通过百度地图坐标拾取器获取
    map.centerAndZoom(point, 16);//设置中心和地图显示级别
    //map.enableScrollWheelZoom(true);//启动滚轮放大缩小，默认禁用
    //map.enableContinuousZoom(true);//连续缩放效果，默认禁用
    //地图放大缩小控件
    let sizeMap = new BMap.Size(10, 80);//显示位置
    map.addControl(new BMap.NavigationControl({
      anchor: 'BMAP_ANCHOR_BOTTOM_RIGHT',//显示方向
      offset: sizeMap
    }));

    //3D效果矢量图控件
    let size3D = new BMap.Size(10, 10);
    map.addControl(new BMap.MapTypeControl({
      anchor: 'BMAP_ANCHOR_TOP_RIGHT',
      offset: size3D
    }));
    map.setCurrentCity("北京");//3D效果需要设置城市
    
    //城市列表控件
    let sizeCity = new BMap.Size(10, 10);
    map.addControl(new BMap.CityListControl({
      anchor: 'BMAP_ANCHOR_TOP_LEFT',
      offset: sizeCity
    }));

    let icon = new BMap.Icon('http://pic002.cnblogs.com/images/2011/308287/2011091516161618.png', new BMap.Size(20, 32), {
      anchor: new BMap.Size(10, 30),
    })
    //设置标注图片和位置
    var mkr = new BMap.Marker(new BMap.Point(116.404, 39.915), {
      icon: icon,
      enableDragging: true,
      raiseOnDrag: true
    });//设置起始坐标点
    map.addOverlay(mkr);//添加标注在地图中并实现拖拽
    

    
  }

}
