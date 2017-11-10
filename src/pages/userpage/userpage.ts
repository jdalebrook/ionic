import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../home/authservice';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authservice: AuthService,
    public alertCtrl: AlertController
  ) {}

  logout() {
    this.authservice.logout();
    this.navCtrl.setRoot(HomePage);
  }

  getinfo() {
   
    this.authservice.getinfo().then(data => {
       // data.success
      if (true) {
        var alert = this.alertCtrl.create({
          // title: data.success,
          // subTitle: data.msg,
          buttons: ['ok']
        });
        alert.present();
      }

    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

}
