import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from "../products/products";
import {
  FormGroup,
  FormControl

} from '@angular/forms';


// @IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  
  langs;
  langForm;
  order = new Order();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = this.navParams.data;
    this.langForm = new FormGroup({
      "langs": new FormControl({disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  
  
  // showOrder : string;

  // ionViewDidLoad() {
  //   this.showOrder=JSON.stringify(this.order);
  //   console.log(JSON.stringify(this.order));
  // }

}
