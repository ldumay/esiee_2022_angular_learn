import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NicePlaceListComponent } from "./nice-place-list/nice-place-list.component";

const routes: Routes = [
  {
    path:"niceplaces", component: NicePlaceListComponent
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