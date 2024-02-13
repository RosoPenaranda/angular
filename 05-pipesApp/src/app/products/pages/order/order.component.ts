import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = 'canFly';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
  ];

  toggleUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: string): void {
    this.orderBy = value as keyof Hero;
  }
}
