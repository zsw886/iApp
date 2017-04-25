import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, MenuController,ToastController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
/*
  Generated class for the BaiduMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var BMap;


@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {
  map: any;
  location:{lat:number,lng:number};
 

  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.menuCtrl.swipeEnable(false);

    
    
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //  // data can be a set of coordinates, or an error (if an error occurred).
    //  // data.coords.latitude
    //  // data.coords.longitude
    // });
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
    //let point = new BMap.Point(this.lon, this.lat);//坐标可以通过百度地图坐标拾取器获取
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 16);//设置中心和地图显示级别
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

getLocation() {
    let watch = Geolocation.watchPosition();
      watch.subscribe((data) => {
        this.map.centerAndZoom(new BMap.Point(data.coords.longitude, data.coords.latitude), 15);
        let pt = new BMap.Point(data.coords.longitude, data.coords.latitude);
        let marker2 = new BMap.Marker(pt);
        this.map.addOverlay(marker2);
    });
  }
}
