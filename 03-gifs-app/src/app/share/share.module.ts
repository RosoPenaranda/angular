import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImagesComponent } from './components/lazyImages/lazyImages.component';

@NgModule({
  declarations: [SidebarComponent, LazyImagesComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyImagesComponent],
})
export class ShareModule {}
