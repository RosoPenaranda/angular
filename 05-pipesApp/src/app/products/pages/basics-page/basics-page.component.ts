import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'Roso';
  public nameUpper: string = 'ROSO';
  public fullName: string = 'RoSo PeñArAnDa';

  public customDate: Date = new Date();
}
