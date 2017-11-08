import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentnewsPage } from './recentnews';

@NgModule({
  declarations: [
    RecentnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentnewsPage),
  ],
})
export class RecentnewsPageModule {}
