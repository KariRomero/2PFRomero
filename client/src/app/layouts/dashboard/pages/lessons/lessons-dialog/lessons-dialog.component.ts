import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILesson } from '../models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lessons-dialog',
  templateUrl: './lessons-dialog.component.html',
  styleUrl: './lessons-dialog.component.scss'
})
export class LessonsDialogComponent {

  lessonsForm : FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private matDialogRef:MatDialogRef<LessonsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingLesson?:ILesson
  ){
    this.lessonsForm = this.formBuilder.group({
      clase:['',[Validators.required, Validators.pattern('^[a-zA-Z\\s]+$'), Validators.maxLength(12)]],
      horario:['',[Validators.required]]
    });
    if(editingLesson){
      this.lessonsForm.patchValue(editingLesson)
    };
  }

  get claseControl(){
    return this.lessonsForm.get('clase')
  }

  get horarioControl(){
    return this.lessonsForm.get('horario')
  }

  onSave():void{
    if (this.lessonsForm.invalid){
      this.lessonsForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.lessonsForm.value);
    }
  }

}
