import { Component, OnInit } from '@angular/core';
import { LessonsService } from './lessons.service';
import { ILesson } from './models';
import { MatDialog } from '@angular/material/dialog';
import { LessonsDialogComponent } from './lessons-dialog/lessons-dialog.component';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.scss'
})
export class LessonsComponent implements OnInit {
  constructor(
    private lessonsService:LessonsService,
    private matDialog:MatDialog
  ){}

  displayedColumns:string[] = [
    'clase',
    'horario',
    'acciones'
  ]

  lessons:ILesson[]  =[]

  ngOnInit(): void {
    this.lessonsService.getLessons().subscribe({
      next:(lessons)=>{
        this.lessons = lessons
      }
    })
  }

  openDialog(editingLesson?:ILesson):void{
    this.matDialog
    .open(LessonsDialogComponent,{
      data:editingLesson
    })
    .afterClosed()
    .subscribe({
      next:(result)=>{
        if(result){
          if(editingLesson){
            this.lessonsService.updateLesson(editingLesson.id, result).subscribe(updateLesson=>{
              this.lessons = updateLesson;
            });
          } else{
            this.lessonsService.addLessons(result).subscribe(updatedLessons=>{
              this.lessons = updatedLessons;
            });
          }
        }
      }
    })
  }

  onDelete(id:number): void {
    if(confirm('¿Está seguro de eliminar usuario?')) {
      this.lessonsService.deleteLesson(id).subscribe(updatedLessons => {
      this.lessons = updatedLessons;
      });
    }
  }

}
