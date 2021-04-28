import { Component } from '@angular/core';
import { BorderColors } from './border-colors';
import { OverviewToday } from './models/overview-today';
import { SocialMediaData } from './models/social-media-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dashboard';
  isModeDark: boolean = false;

   socialMediaDataItems: SocialMediaData[] = [
    {
      borderColor: BorderColors.borderBlue,
      followers: '1989',
      icon: '../../../assets/images/icon-facebook.svg',
      username: '@deymerh',
      iconUp: '../../../assets/images/icon-up.svg'
    },
    {
      borderColor: BorderColors.borderBlue,
      followers: '10.444',
      icon: '../../../assets/images/icon-instagram.svg',
      username: '@deymerh',
      iconUp: '../../../assets/images/icon-up.svg'
    },
    {
      borderColor: BorderColors.borderRed,
      followers: '11k',
      icon: '../../../assets/images/icon-twitter.svg',
      username: '@deymerh',
      iconUp: '../../../assets/images/icon-up.svg'
    },
    {
      borderColor: BorderColors.borderYellow,
      followers: '8239',
      icon: '../../../assets/images/icon-youtube.svg',
      username: '@deymerh',
      iconUp: '../../../assets/images/icon-up.svg'
    },
   ]

  overviewToday: OverviewToday[] = [
    {
      title: 'Page Views',
      likes: '87',
      icon: '../assets/images/icon-facebook.svg',
      percentage: '3%'
    },
    {
      title: 'Likes',
      likes: '52',
      icon: '../assets/images/icon-facebook.svg',
      percentage: '56%'
    },
    {
      title: 'Likes',
      likes: '5668',
      icon: '../assets/images/icon-facebook.svg',
      percentage: '2257%'
    },
    {
      title: 'Profile views',
      likes: '52k',
      icon: '../assets/images/icon-instagram.svg',
      percentage: '1357%'
    },
    {
      title: 'Retweets',
      likes: '117',
      icon: '../assets/images/icon-twitter.svg',
      percentage: '303%'
    },
    {
      title: 'Likes',
      likes: '507',
      icon: '../assets/images/icon-twitter.svg',
      percentage: '553%'
    },
    {
      title: 'Likes',
      likes: '107',
      icon: '../assets/images/icon-youtube.svg',
      percentage: '19%'
    },
    {
      title: 'Total views',
      likes: '1407',
      icon: '../assets/images/icon-youtube.svg',
      percentage: '12%'
    },
  ]

  toggleModeDark() {
    this.isModeDark = !this.isModeDark
  }
}
