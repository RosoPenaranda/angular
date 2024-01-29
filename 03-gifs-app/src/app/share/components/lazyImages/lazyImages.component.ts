import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazyImages.component.html',
})
export class LazyImagesComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error('Url property is required');
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  onLoad(): void {
    // setTimeout(() => {
    //   this.hasLoaded = true;
    // }, 500);
    this.hasLoaded = true;
  }
}
