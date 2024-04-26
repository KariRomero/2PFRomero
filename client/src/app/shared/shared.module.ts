import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NameLastNamePipe } from './pipes/name-last-name.pipe';
import { SizeDirective } from './directives/size.directive';
import { ValidatorFormPipe } from './pipes/validator-form.pipe';



@NgModule({
  declarations: [
  
    NameLastNamePipe,
       SizeDirective,
       ValidatorFormPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    SizeDirective,
    NameLastNamePipe,
    ValidatorFormPipe
  ]
})
export class SharedModule { }
