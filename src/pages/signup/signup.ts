import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

constructor(private authService: AuthService,
            private loadingCtrl: LoadingController,
            private alertCtrl: AlertController) {

}

  onSignup(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Rejestracja w trakcie'
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Rejestracja udana!',
          message: 'Witaj na pokładzie',
          buttons: ['Ok!']
        });
        alert.present();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Rejestracja nieudana!',
          message: error.message,
          buttons: ['Ok!']
        });
        alert.present();
      });
  }

}
