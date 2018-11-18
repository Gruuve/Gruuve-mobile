import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResPage } from '../search-res/search-res';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search:string='';

  url2 = 'https://gruuve.github.io/demo.json';
  data2: Observable<any>;
  main2 : any;
  a;b;c;d;e;f;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public httpClient: HttpClient) {

    this.data2 = this.httpClient.get(this.url2);
    this.data2
    .subscribe(data => {
      this.main2 = data;
      this.a=data.img1;
      this.b=data.header1;
      this.c=data.subheader1;
    });

  }

  press(){

   if(this.search==''){
    const toast = this.toastCtrl.create({
      message: 'Please enter a query',
      duration: 2000
    });
    toast.present();
   }
   else{
    this.navCtrl.push(SearchResPage,{
      'search':this.search
    });
  }
  
  }
}
