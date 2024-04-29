import { Component, OnInit } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './students-dialog/students-dialog.component';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  displayedColumns : string[] = [
    'nombre',
    'email',
    'curso',
    'turno',
    'createdAt',
    'acciones'
  ]

  students : IStudent[] = [];

  constructor(private matDialog: MatDialog, private studentsService:StudentsService){};

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next:(students)=>{
        this.students = students
      }
    })
  }
  
  openDialog(editingStudent?: IStudent): void {
    this.matDialog
      .open(StudentsDialogComponent, { data: editingStudent })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingStudent) {
              this.studentsService.updateStudent(editingStudent.id, result);
            } else {
              this.studentsService.addStudents(result);
            }
          }
        }
      });
  }
  

onDelete(id: number): void {
  if (confirm('¿Está seguro de eliminar usuario?')) {
    this.studentsService.deleteStudent(id);
  }
}

}
