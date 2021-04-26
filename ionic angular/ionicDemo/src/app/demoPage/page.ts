import { Component } from '@angular/core';
import { Geolocation, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-page',
  templateUrl: 'page.html',
  styleUrls: ['page.scss'],
})
export class page {
  
  constructor() {}
  
//   constructor(private geolocation: Geolocation) { 

//     
//  this.geolocation.getCurrentPosition().then((resp) => {
//   console.log('My latitude : ', resp.coords.latitude);
//   console.log('My longitude: ', resp.coords.longitude);
// }).catch((error) => {
//   console.log('Foutmelding getting location', error);
// });

// let watch = this.geolocation.watchPosition().subscribe(position => {
//       if ((position as Geoposition).coords != undefined) {
//         var geoposition = (position as Geoposition);
//         console.log('Latitude: ' + geoposition.coords.latitude + ' - Longitude: ' + geoposition.coords.longitude);
//       } else { 
//         var positionError = (position as PositionError);
//         console.log('Foutmelding ' + positionError.code + ': ' + positionError.message);
//     }

//     })
//   }
}