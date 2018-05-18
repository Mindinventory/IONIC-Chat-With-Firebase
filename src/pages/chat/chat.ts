import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user:string = ''
  message:string = ''
  messages: object[];

  constructor(public navParam: NavParams,public db: AngularFireDatabase) {
    this.user = this.navParam.get('user')
    this.db.list('/chat/').valueChanges().subscribe(data => {
      this.messages = data
    });
  }

  sendMessage(){
    this.db.list('/chat').push({
      userName: this.user,
      message: this.message
    }).then(() => {
      this.message = ''
    })
  }

}
