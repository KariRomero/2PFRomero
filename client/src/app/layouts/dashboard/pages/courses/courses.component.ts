import { Component, OnInit } from '@angular/core';
import { ICourse } from './models';
import { CoursesService } from './courses.service';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  constructor(
    private coursesService: CoursesService,
    private matDialog:MatDialog
  ){}

  displayedColumns:string[] = [
    'curso',
    'turno',
    'acciones'
  ]

  courses : ICourse[]=[]

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe({
      next:(courses)=>{
        this.courses = courses 
      }
    })    
  }

  openDialog(editingCourse?:ICourse):void{
    this.matDialog
    .open(CoursesDialogComponent,{
      data:editingCourse
    })
    .afterClosed()
    .subscribe({
      next:(result)=>{
        if(result){
          if(editingCourse){
            this.coursesService.updateCourse(editingCourse.id, result).subscribe(updateCourse=>{
              this.courses = updateCourse;
            });
          } else{
            this.coursesService.addCourses(result).subscribe(updateCourse=>{
              this.courses = updateCourse;
            });
          }
        }
      }
    })
  }

  onDelete(id:number): void {
    if(confirm('¿Está seguro de eliminar usuario?')) {
      this.coursesService.deleteCourse(id).subscribe(updateCourse => {
      this.courses = updateCourse;
      });
    }
  }

}
