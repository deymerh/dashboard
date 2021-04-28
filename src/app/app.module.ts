import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaItemComponent } from './components/social-media-item/social-media-item.component';
import { ItemInfoSocialComponent } from './components/item-info-social/item-info-social.component';
import { ButtonOffComponent } from './components/button-off/button-off.component';
import { ButtonOnComponent } from './components/button-on/button-on.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaItemComponent,
    ItemInfoSocialComponent,
    ButtonOffComponent,
    ButtonOnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
