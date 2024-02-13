import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? 'Vuela' : 'No vuela';
  }
}
