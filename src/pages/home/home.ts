import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from './authservice';
import { UserpagePage } from '../userpage/userpage';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usercreds = {
    name: '',
    password: ''
  };

  isParaActive:boolean = false;
 
 
  //ToggleClass function functionality
  toggleClass(){
      this.isParaActive = !this.isParaActive;     
  }

  constructor(public navCtrl: NavController, public authservice: AuthService) {

  }
  login(user) {
    this.authservice.authenticate(user).then(data => {
      if (data) {
        this.navCtrl.setRoot(UserpagePage);
      }
    });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

 
  //Toggle div
  public mostraropciones: boolean = false;   
  showOptions(){
    this.mostraropciones = !this.mostraropciones;
  }

   


}
 