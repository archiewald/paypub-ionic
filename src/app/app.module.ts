import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { PubsPage } from '../pages/pubs/pubs';
import { ProductsPage } from '../pages/products/products';
import { OrderPage } from '../pages/order/order';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { AuthService } from '../services/auth';
import { OrderService } from '../services/order';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    PubsPage,
    ProductsPage,
    OrderPage,
    SigninPage,
    SignupPage,
    MyOrdersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    PubsPage,
    ProductsPage,
    OrderPage,
    SigninPage,
    SignupPage,
    MyOrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
