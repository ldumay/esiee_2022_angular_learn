import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NicePlaceComponent } from './nice-place/nice-place.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { NicePlaceListComponent } from './nice-place-list/nice-place-list.component';
import { HeaderComponent } from './header/header.component'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleNicePlaceComponent } from './single-nice-place/single-nice-place.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentaireComponent } from './commentaire/commentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    NicePlaceComponent,
    NicePlaceListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleNicePlaceComponent,
    CommentaireComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
 }