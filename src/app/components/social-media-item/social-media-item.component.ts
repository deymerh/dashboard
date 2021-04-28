import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaData } from 'src/app/models/social-media-data';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.css']
})
export class SocialMediaItemComponent implements OnInit {
  @Input() socialMediaData: SocialMediaData;
  @Input() isModeDark: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
