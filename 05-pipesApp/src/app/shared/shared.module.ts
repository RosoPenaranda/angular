import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

const commonModules = [MenuComponent];

@NgModule({
  declarations: commonModules,
  imports: [CommonModule, PrimeNgModule],
  exports: commonModules,
})
export class SharedModule {}
