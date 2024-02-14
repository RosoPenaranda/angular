import { Pipe, type PipeTransform } from '@angular/core';
import { Hero, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | ''): Hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return heroes.sort((a, b) =>
          a.canFly === b.canFly ? 0 : a.canFly ? -1 : 1
        );
      case 'color':
        return heroes.sort((a, b) => ColorMap[a.color] - ColorMap[b.color]);
      default:
        return heroes;
    }
  }
}
