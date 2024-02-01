import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
