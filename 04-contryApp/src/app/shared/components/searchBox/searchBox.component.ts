import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onInputChange = new EventEmitter<string>();

  emitValue(value: string): void {
    console.log('desde el searchBox', value);
    this.onInputChange.emit(value);
  }
}
