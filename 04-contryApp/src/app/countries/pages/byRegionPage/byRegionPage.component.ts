import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'country-by-region-page',
  templateUrl: './byRegionPage.component.html',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: Region): void {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
