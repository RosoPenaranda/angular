import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  toggleUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
