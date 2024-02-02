import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './byCountryPage.component.html',
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
