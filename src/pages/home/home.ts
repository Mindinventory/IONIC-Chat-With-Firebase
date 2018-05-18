import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_name: string = ''
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    this.navCtrl.push(ChatPage, {
      user: this.user_name
    })
  }

}
