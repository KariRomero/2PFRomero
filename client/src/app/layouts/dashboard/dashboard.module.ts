import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { StudentsModule } from './pages/students/students.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StudentsModule,
    MatListModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
