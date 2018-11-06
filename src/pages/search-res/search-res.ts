import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-search-res',
  templateUrl: 'search-res.html',
})
export class SearchResPage {

  search : string = this.navParams.get('search');
  newString = this.search.replace(/\s+/g,' ').trim();
  final = this.newString.replace(' ', '+');
  
  //url2 = 'https://horoscope-api.herokuapp.com/horoscope/month/' + this.name;
  horoscope2: Observable<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  press(){
    this.navCtrl.pop();
  }
  

}
