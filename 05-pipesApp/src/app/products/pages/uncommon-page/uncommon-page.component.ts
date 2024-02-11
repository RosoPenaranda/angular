import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Roso';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente(): void {
    this.name = this.name === 'Roso' ? 'Melissa' : 'Roso';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  // i18Plural
  public clients: string[] = ['Roso', 'Melissa', 'Juan', 'Pedro', 'Luis'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient(): void {
    this.clients.shift();
  }

  // keyvalue pipe
  public person = {
    name: 'Roso',
    age: 38,
    address: 'Calle 123',
  };

  // async pipe

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3000);
  });
}
