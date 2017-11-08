import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AboutPage } from '../pages/about/about';
import { ArchivesPage } from '../pages/archives/archives';
import { ContactPage } from '../pages/contact/contact';

import { RecentPage } from '../pages/recent/recent';
import { RecentcommentPage } from '../pages/recentcomment/recentcomment';
import { RecentnewsPage } from '../pages/recentnews/recentnews';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'ios-home-outline',  component: HomePage },      
      { title: 'About', icon: 'ios-information-circle-outline', component: AboutPage },
      { title: 'Archives', icon: 'ios-archive-outline', component: ArchivesPage },
      { title: 'Contact', icon: 'ios-contacts-outline', component: ContactPage },
      { title: 'Recent',  icon: 'ios-time-outline', component: RecentPage },
      { title: 'Recent Comments', icon: 'ios-chatbubbles-outline', component: RecentcommentPage },
      { title: 'Recent News', icon: 'ios-paper-outline', component: RecentnewsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
