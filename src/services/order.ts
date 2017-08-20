import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AuthService } from "./auth";
import { Order } from "../pages/products/products"
import 'rxjs/Rx';

@Injectable()
export class OrderService {

    constructor (private http: Http, private authService: AuthService) {

    }

    sendOrder(token: string, order: Order){
        const userId=this.authService.getActiveUser().uid;
        return this.http
            .post('https://paypub-12cca.firebaseio.com/' + userId + '/order-list.json?auth='+ token, order)
            .map((response: Response) => {
                return response.json();
            });
    }

    loadOrders(token: string){
        const userId=this.authService.getActiveUser().uid;
        return this.http.get('https://paypub-12cca.firebaseio.com/' + userId + '/order-list.json?auth='+ token)
        .map((response: Response) => {
            return response.json();
        });
    }
}

