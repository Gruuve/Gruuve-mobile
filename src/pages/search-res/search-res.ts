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
  
  url = 'https://gruuve-main.herokuapp.com/api/users?q='+this.final;
  data1: Observable<any>;
  main:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {

    this.data1 = this.httpClient.get(this.url);
    this.data1
    .subscribe(data => {
    this.main = data;
    });

  }

  press(){
    this.navCtrl.pop();
  }
  

}
