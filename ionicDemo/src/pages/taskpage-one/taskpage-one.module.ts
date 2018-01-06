import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskpageOnePage } from './taskpage-one';

@NgModule({
  declarations: [
    TaskpageOnePage,
  ],
  imports: [
    IonicPageModule.forChild(TaskpageOnePage),
  ],
})
export class TaskpageOnePageModule {}
