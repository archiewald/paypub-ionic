import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PubsPage } from '../pubs/pubs'

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  pubsPage = PubsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
