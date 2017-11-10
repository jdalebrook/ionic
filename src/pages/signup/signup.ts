import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AuthService} from '../home/authservice';

 
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newcreds = {
    name: '',
    password: ''
}
  constructor(public navCtrl: NavController, public navParams: NavParams,  public authservice: AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  register(user) {
    this.authservice.adduser(user).then(data => {
        if(data) {
            var alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'User Created',
                buttons: ['ok']
            });
            alert.present();
        }
});
}


}
