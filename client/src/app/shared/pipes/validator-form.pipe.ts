import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validatorForm'
})
export class ValidatorFormPipe implements PipeTransform {

  transform(value: ValidationErrors | undefined | null, ...args: unknown[]): unknown {
    console.log(value);
    if(value){
      let message : string [] = [];

      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          const error = value[key];
          console.log(key);

          if(key==='required') message.push('Este campo es requerido');
          if(key === 'maxlength') message.push(`No puede tener mas de ${error.requiredLength} caracteres`);
          if(key==='pattern') message.push('No se admiten números ni símbolos');         
          
        }
      }
      return message.join('. ')
    }
    
    return null;
  }

}
