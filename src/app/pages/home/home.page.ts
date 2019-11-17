import { Component } from '@angular/core';
import { ITab } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tabs: ITab[] = [
    { tab: 'dashboard', label: 'Dashboard', icon: 'aperture'},
    { tab: 'credits', label: 'Credits', icon: 'card'},
    { tab: 'add-sale', label: 'Add Sale', icon: 'book'},
  ];
  constructor() {}

}
