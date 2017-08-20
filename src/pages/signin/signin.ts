import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PubsPage } from '../pubs/pubs';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService,
            private loadingCtrl: LoadingController,
            private alertCtrl: AlertController) {
  }

  pubsPage = PubsPage;

  onSignin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Logowanie w trakcie'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Zalogowałeś się!',
          buttons: ['Ok!']
        });
        alert.present();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Logowanie nieudane!',
          message: error.message,
          buttons: ['Ok!']
        });
        alert.present();
      });
  }

}
