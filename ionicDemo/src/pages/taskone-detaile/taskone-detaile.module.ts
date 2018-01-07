import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskoneDetailePage } from './taskone-detaile';

@NgModule({
  declarations: [
    TaskoneDetailePage,
  ],
  imports: [
    IonicPageModule.forChild(TaskoneDetailePage),
  ],
})
export class TaskoneDetailePageModule {}
