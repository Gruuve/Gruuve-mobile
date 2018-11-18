import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-images',
  templateUrl: 'images.html',
})
export class ImagesPage {

  search : string = this.navParams.get('search');
  newString = this.search.replace(/\s+/g,' ').trim();
  final = this.newString.replace(' ', '+');

  url = 'https://gruuve-images.herokuapp.com/api/users?q='+this.final;
  data1: Observable<any>;
  main:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public loadingCtrl: LoadingController) {
  
    this.presentLoading();
    this.data1 = this.httpClient.get(this.url);
    this.data1
    .subscribe(data => {
      this.main = data;
    });
  
  }

  press(){
    this.navCtrl.pop();
  }


  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1100
    });
    loader.present();
  }
  
}
