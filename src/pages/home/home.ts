import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchResPage } from '../search-res/search-res';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search:string='';

  

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    

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
