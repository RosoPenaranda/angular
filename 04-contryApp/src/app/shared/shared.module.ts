import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoadingSpinnerComponent } from './components/loadingSpinner/loadingSpinner.component';

const shareComponents = [
  HomePageComponent,
  AboutPageComponent,
  SidebarComponent,
  ContactPageComponent,
  SearchBoxComponent,
  LoadingSpinnerComponent,
];

@NgModule({
  declarations: [...shareComponents],
  imports: [CommonModule, RouterModule],
  exports: [...shareComponents],
})
export class SharedModule {}
