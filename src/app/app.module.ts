import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AuthService} from '../pages/home/authservice';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AboutPage } from '../pages/about/about';
import { ArchivesPage } from '../pages/archives/archives';
import { ContactPage } from '../pages/contact/contact';

import { RecentPage } from '../pages/recent/recent';
import { RecentcommentPage } from '../pages/recentcomment/recentcomment';
import { RecentnewsPage } from '../pages/recentnews/recentnews';

import {UserpagePage} from '../pages/userpage/userpage';
import {SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ArchivesPage,
    ContactPage,
    RecentPage,
    RecentcommentPage,
    RecentnewsPage,
    UserpagePage,
    SignupPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ArchivesPage,
    ContactPage,
    RecentPage,
    RecentcommentPage,
    RecentnewsPage,
    UserpagePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
