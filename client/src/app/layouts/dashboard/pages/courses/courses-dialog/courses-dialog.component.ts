import { Component, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesComponent } from '../courses.component';
import { ICourse } from '../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.scss'
})
export class CoursesDialogComponent {

  coursesForm : FormGroup

  constructor(
    private formBuilder : FormBuilder,
    private matDialogRef:MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?:ICourse
  ){
    this.coursesForm = this.formBuilder.group({
      curso:['',[Validators.required, Validators.pattern('^[a-zA-Z\\s]+$'), Validators.maxLength(12)]],
      turno:['',[Validators.required]]
    });
    if(editingCourse){
      this.coursesForm.patchValue(editingCourse)
    };

  }

  get courseControl(){
    return this.coursesForm.get('curso')
  }

  get turnoControl(){
    return this.coursesForm.get('turno')
  }

  onSave():void{
    if (this.coursesForm.invalid){
      this.coursesForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.coursesForm.value);
    }
  }

}
