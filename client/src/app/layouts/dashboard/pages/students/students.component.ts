import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns : string[] = [
    'id',
    'nombre',
    'email',
    'curso',
    'createdAt',
    'acciones'
  ]

  students : IStudent[] = [
    {
      id:1,
      nombre:'Karina',
      apellido:'Romero',
      email:'karina@test.com',
      curso: 'Angular',
      createdAt: new Date()
    },
    {
      id:2,
      nombre:'Nicolas',
      apellido:'Sanchez',
      email:'neke@test.com',
      curso: 'React',
      createdAt: new Date()
    },
    {
      id:3,
      nombre:'Franco Matias',
      apellido:'Ravera',
      email:'fran@test.com',
      curso: 'React',
      createdAt: new Date()
    }
  ]

  constructor(private matDialog: MatDialog){};

  openDialog(editingStudent?:IStudent):void{
    this.matDialog
    .open(StudentsDialogComponent,{
      data: editingStudent
    })
    .afterClosed()
    .subscribe({
      next:(result)=>{
        if(result){
          if(editingStudent){
            this.students = this.students.map((s)=>s.id === editingStudent.id ?
            {...s,...result} : s)
          } else{
            result.id = new Date().getTime();
            result.createdAt = new Date();
            this.students=[...this.students,result]
          }
        }
      }
    })
  }

  onDelete(id:number) : void{
    if(confirm('¿Está seguro de eliminar usuario?'))
      this.students = this.students.filter((s)=>s.id != id)
  }

}
