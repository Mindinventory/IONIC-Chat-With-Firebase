import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
  apiKey: "AIzaSyCUIQZ1yTF4toyJhfwF2qG3x3nWdWsCsqk",
  authDomain: "auth-fabca.firebaseapp.com",
  databaseURL: "https://auth-fabca.firebaseio.com",
  projectId: "auth-fabca",
  storageBucket: "auth-fabca.appspot.com",
  messagingSenderId: "990459860758"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
