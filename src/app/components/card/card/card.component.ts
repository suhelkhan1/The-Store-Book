import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  cards = [
    { title: 'Total Sale', number: '8,20,000', color: 'color1', icon: 'fa fa-rupee-sign'},
    { title: 'Avg Monthly Sale', number: '1,20,000', color: 'color2', icon: 'fa fa-chart-area'},
    { title: 'Total Credit', number: '25,000', color: 'color3', icon: 'fa fa-credit-card'},
    { title: 'Total Cutomer\'s Borrows', number: '12,000', color: 'color4', icon: 'fas fa-user-friends'},
  ];
  constructor() { }

  ngOnInit() {}

}
