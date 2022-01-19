import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NicePlaceComponent } from './nice-place/nice-place.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { NicePlaceListComponent } from './nice-place-list/nice-place-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NicePlaceComponent,
    NicePlaceListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
}
