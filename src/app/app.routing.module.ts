import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NicePlaceListComponent } from "./nice-place-list/nice-place-list.component";

const routes: Routes = [
  {
    path:"niceplaces", component: NicePlaceListComponent
  },
  {
    path:"", component: LandingPageComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{}