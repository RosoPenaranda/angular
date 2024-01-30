import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styles: `img{
      width: 35px;
    }`,
})
export class CountryTableComponent {
  @Input() countries: any[] = [];
}
