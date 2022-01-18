import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-place',
  templateUrl: './nice-place.component.html',
  styleUrls: ['./nice-place.component.scss']
})
export class NicePlaceComponent implements OnInit {

  title!: string;
  imageUrl!: string;
  description!: string;
  createDate!: Date;
  location!: string;
  score!: number;
  likes!: number;

  constructor() { }

  ngOnInit(): void {
    this.title = "Le lace de Côme";
    this.imageUrl = "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg";
    this.description = "Le lace de Côme ....";
    this.createDate = new Date;
    this.location = "Italie";
    this.score = 0.75;
    this.likes = 3;
  }

}
