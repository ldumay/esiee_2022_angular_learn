import { Component, OnInit } from '@angular/core';
import { NicePlace } from './models/nice-place-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  myPlace!:NicePlace;
  ngOnInit(): void {
    this.myPlace = new NicePlace(
      "Le lac de Côme",
      "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
      "Le lace de Côme ....",
      new Date,
      "Italie",
      0.75,
      3
    );
  }
}
