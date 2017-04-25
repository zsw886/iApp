import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';

@Component({
  selector: 'geolocation.page',
  templateUrl: 'geolocation.page.html'
})
export class GeolocationPage {

    location:{lat:number,lng:number};
  constructor() {

  }

  getGeolocation(){
      Geolocation.getCurrentPosition().then(resp=>{
          this.location={
              lat:resp.coords.latitude,
              lng:resp.coords.longitude
          };
      });
  }

}
