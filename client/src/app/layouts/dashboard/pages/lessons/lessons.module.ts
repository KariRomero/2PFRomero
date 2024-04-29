import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons.component';
import { SharedModule } from '../../../../shared/shared.module';
import { LessonsDialogComponent } from './lessons-dialog/lessons-dialog.component';


@NgModule({
  declarations: [
    LessonsComponent,
    LessonsDialogComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    SharedModule
  ]
})
export class LessonsModule { }
