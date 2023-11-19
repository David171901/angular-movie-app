import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(
    value: ValidationErrors | null | undefined,
    ...args: unknown[]
  ): unknown {
    if (!value) return '';

    const errorMessages: string[] = [];

    if ('required' in value) {
      errorMessages.push('This field is required.');
    }

    if ('email' in value) {
      errorMessages.push('Please enter a valid email.');
    }

    return errorMessages.join('. ');
  }

}
