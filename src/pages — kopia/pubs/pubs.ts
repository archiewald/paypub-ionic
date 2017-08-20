import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import pubs from "../../data/pubs"
import {Drink} from "../../data/drink.interface"
import {Food} from "../../data/food.interface"
import {ProductsPage} from "../products/products"

@Component({
  selector: 'page-pubs',
  templateUrl: 'pubs.html',
})
export class PubsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pubCollection = pubs;
    }

  pubCollection: {
    id: number;
    name: string;
    city: string;
    address: string;
    picture: string;
    drinks: Drink[];
    foods: Food[];
  }[];

  productsPage=ProductsPage;

}
