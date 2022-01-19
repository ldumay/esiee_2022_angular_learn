import { Component, OnInit } from '@angular/core';
import { NicePlace } from '../models/nice-place-model';

@Component({
  selector: 'app-nice-place-list',
  templateUrl: './nice-place-list.component.html',
  styleUrls: ['./nice-place-list.component.scss']
})
export class NicePlaceListComponent implements OnInit {

  myPlaces!:NicePlace[];

  constructor() { }

  ngOnInit(): void {
    this.myPlaces = [
      {
        title: "Le lac de Côme 1",
        imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
        description: "Le lace de Côme ....",
        createDate: new Date,
        location: "Italie",
        score: 0.35,
        likes: 3,
        tag: "Lac"
      },
      {
        title: "Le lac de Côme 2",
        imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
        description: "Le lace de Côme ....",
        createDate: new Date,
        location: "Italie",
        score: 0.75,
        likes: 3,
        tag: "Lac"
      },
      {
        title: "Le lac de Côme 3",
        imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
        description: "Le lace de Côme ....",
        createDate: new Date,
        location: "Italie",
        score: 0.53,
        likes: 3,
        tag: "Lac"
      }
    ];
  }

}
