import { Component, Input, OnInit } from '@angular/core';
import { OverviewToday } from 'src/app/models/overview-today';

@Component({
  selector: 'app-item-info-social',
  templateUrl: './item-info-social.component.html',
  styleUrls: ['./item-info-social.component.css']
})
export class ItemInfoSocialComponent implements OnInit {
  @Input() overviews: OverviewToday;
  @Input() isModeDark: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
