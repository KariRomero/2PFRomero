import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then((m)=>m.HomeModule)  
  },
  {
    path:'students',
    loadChildren:()=>import('./pages/students/students.module').then((m)=>m.StudentsModule)
  },
  {
    path:'courses',
    loadChildren:()=>import('./pages/courses/courses.module').then((m)=>m.CoursesModule)
  },
  {
    path:'lessons',
    loadChildren:()=>import('./pages/lessons/lessons.module').then((m)=>m.LessonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
