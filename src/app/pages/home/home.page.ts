import { Component } from '@angular/core';
import { ITab } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabs: ITab[] = [
    { tab: 'all', label: 'All'},
    { tab: 'today', label: 'Today'},
    { tab: 'Month', label: 'Month'},
  ];
  constructor() {}

}
