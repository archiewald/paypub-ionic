import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PubsPage } from './pubs';

@NgModule({
  declarations: [
    PubsPage,
  ],
  imports: [
    IonicPageModule.forChild(PubsPage),
  ],
  exports: [
    PubsPage
  ]
})
export class PubsPageModule {}
