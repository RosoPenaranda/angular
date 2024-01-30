import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country, Translation } from '../../interfaces/country.interfaces';

@Component({
  selector: 'country-page',
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
  public translations: [string, Translation][] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlfaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('');
          return;
        }
        this.country = country;
        this.translations = Object.entries(country.translations);
      });
  }

  searchCountry(id: string) {
    return this.countriesService
      .searchCountryByAlfaCode(id)
      .subscribe((country) => {
        console.log(country);
      });
  }
}
