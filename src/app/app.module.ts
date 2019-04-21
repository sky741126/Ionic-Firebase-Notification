import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from 'angularfire2/';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FcmProvider } from '../providers/fcm/fcm';

const firebase = {
  apiKey: "AIzaSyC-DtOg_BW0H4jHQ8XWABm3ukstquwTQI8",
  authDomain: "fir-demo-63795.firebaseapp.com",
  databaseURL: "https://fir-demo-63795.firebaseio.com",
  projectId: "fir-demo-63795",
  storageBucket: "fir-demo-63795.appspot.com",
  messagingSenderId: "207442290990",
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase), 
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FcmProvider
  ]
})
export class AppModule {}
