import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
})
export class DbzListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(index: string | undefined): void {
    this.onDeleteCharacter.emit(index);
  }
}
