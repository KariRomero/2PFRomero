import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from '../models';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.scss'
})
export class StudentsDialogComponent {
  
  studentsForm : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private matDialogRef : MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingStudent?: IStudent    
  ){
    this.studentsForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$'), Validators.maxLength(12)]],
      apellido:['',[Validators.required,Validators.pattern('^[a-zA-Z\\s]+$'), Validators.maxLength(12)]],
      email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}')]],
      curso:['',[Validators.required]],      
    });
    if(editingStudent){
      this.studentsForm.patchValue(editingStudent)
    };
  }

  get nombreControl(){
    return this.studentsForm.get('nombre');
  }

  get apellidoControl(){
    return this.studentsForm.get('apellido');
  }

  get emailControl(){
    return this.studentsForm.get('email');
  }

  get cursoControl(){
    return this.studentsForm.get('curso');
  }

  onSave() : void{
    if(this.studentsForm.invalid){
      this.studentsForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentsForm.value)
    }
  }




}
