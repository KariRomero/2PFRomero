import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../../layouts/dashboard/pages/students/models';

@Pipe({
  name: 'nameLastName'
})
export class NameLastNamePipe implements PipeTransform {

  transform(student: IStudent): string {
    return `${student.nombre} ${student.apellido}`;
  }
}
