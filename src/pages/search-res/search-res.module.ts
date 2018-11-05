import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResPage } from './search-res';

@NgModule({
  declarations: [
    SearchResPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResPage),
  ],
})
export class SearchResPageModule {}
