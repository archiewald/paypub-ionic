import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Drink } from "../../data/drink.interface"
import {OrderPage} from "../order/order"

@Component({
  selector: 'page-drinks',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor (private navParams: NavParams){
    this.chosenPub = this.navParams.data;
    this.showDrinks = true;
    this.showFoods = false;
    this.getDrinkCategories();
  }

  isOrderEmpty(){
    if (this.order.orderRows.length==0) return true;
    else return false;
  }

  showDrinks:boolean;
  showFoods:boolean;
  drinkCategories: Array<string>=[];
  

  chosenPub: {
    name: string,
    drinks: Drink[]
  }

  order = new Order();

  orderPage=OrderPage;

  // onAddProductClick(product){
  //   console.log("Zamowiles " + product.name);
  //   this.order.addProduct(product);
  //   console.log("Twoje zamowienie wynosi " + JSON.stringify(this.order) + " zł");
  // }
  
  // onRemoveProductClick(product){
  //   console.log("Wyjebales " + product.name);
  //   this.order.removeProduct(product);
  //   console.log("Twoje zamowienie to " + JSON.stringify(this.order) + " zł");
  // }

  showDrinksClick(){
    this.showDrinks=true;
    this.showFoods=false;
  }

  showFoodsClick(){
    this.showDrinks=false;
    this.showFoods=true;
  }

  getDrinkCategories(){
    for (var i=0; i<this.chosenPub.drinks.length; i++){
      if (this.drinkCategories.indexOf(this.chosenPub.drinks[i].category) == -1)
      this.drinkCategories.push(this.chosenPub.drinks[i].category);
    }
  }

}

export class Order {

  orderRows: Array<OrderRow>=[];
  sum: number = 0;

  getProductQuantity(product){
    var isProductHereIndex = this.orderRows.findIndex(isProductHere);
    if (isProductHereIndex!=-1) {
      return this.orderRows[isProductHereIndex].quantity;
    }
    function isProductHere(element, index, array){
      return (element.productName==product.name)
    }
  }

  addProduct(product, isfood) {
    
    function isProductHere(element, index, array){
      return (element.productName==product.name)
    }

    var isProductHereIndex = this.orderRows.findIndex(isProductHere);

    if (isProductHereIndex!=-1) {
      this.orderRows[isProductHereIndex].quantity+=1;
    }
    else {
      var orderRow = {
        productName: product.name,
        price: product.price,
        quantity: 1,
        isfood: isfood
      }
      this.orderRows.push(orderRow);
    }
    
    this.sum+=product.price;
  }

  removeProduct(product) {
    
    function isProductHere(element, index, array){
      return (element.productName==product.name)
    }

    var isProductHereIndex = this.orderRows.findIndex(isProductHere);

    if (isProductHereIndex!=-1) {
      if (this.orderRows[isProductHereIndex].quantity==1){
        this.orderRows.splice(isProductHereIndex,1);
      }
      else{
        this.orderRows[isProductHereIndex].quantity-=1;
      }
      this.sum-=product.price;
    }
  }

}

export interface OrderRow {
  productName: string;
  price: number;
  quantity: number;
  isfood: boolean;
}