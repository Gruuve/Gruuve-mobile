import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { ImagesPage } from '../images/images';


@IonicPage()
@Component({
  selector: 'page-images-res',
  templateUrl: 'images-res.html',
})
export class ImagesResPage {

  search:string='';

 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

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
    this.navCtrl.push(ImagesPage,{
      'search':this.search
    });
  }
  
  }

}
