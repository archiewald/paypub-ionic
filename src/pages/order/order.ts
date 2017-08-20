import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from "../products/products";
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { OrderService } from "../../services/order";
import { AuthService } from "../../services/auth";


@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  
  langs;
  langForm;
  order = new Order();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private orderService: OrderService,
              private authService: AuthService,
               ) {
    this.order = this.navParams.data;
    this.langForm = new FormGroup({
      "langs": new FormControl({disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

  onSendOrderClick() {
    this.authService.getActiveUser().getToken()
      .then(
        (token: string) => {
          this.orderService.sendOrder(token, this.order)
            .subscribe(
              () => console.log('Success!'),
              error => {
                console.log(error);
              }
            )
        } 
      )
  }
  
  // showOrder : string;

  // ionViewDidLoad() {
  //   this.showOrder=JSON.stringify(this.order);
  //   console.log(JSON.stringify(this.order));
  // }

}
