import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Order } from "../products/products";
import { OrderService } from "../../services/order";
import { AuthService } from "../../services/auth";

@IonicPage()
@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderService: OrderService, private authService: AuthService) {
    this.onLoadOrders();
  }

  orders : any;
  
  onLoadOrders() {
    this.authService.getActiveUser().getToken()
      .then(
        (token: string) => {
          this.orderService.loadOrders(token)
            .subscribe(
              (data) => {
                console.log(JSON.parse(JSON.stringify(data)));
                //this.orders=JSON.parse(JSON.stringify(data));
              },
              error => {
                console.log(error);
              }
            )
        } 
      )
  }


  

}
