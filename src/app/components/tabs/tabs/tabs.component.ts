import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from 'src/app/models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {

  @Input() tabs: ITab[];
  constructor() { }

  ngOnInit() {
  }

}
