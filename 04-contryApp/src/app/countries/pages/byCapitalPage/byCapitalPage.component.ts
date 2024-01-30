import { Component } from '@angular/core';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
  searchByCapital(term: string): void {
    console.log('desde ByCapitalPage');
    console.log(term);
  }
}
