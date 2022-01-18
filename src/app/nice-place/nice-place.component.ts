import { Component, Input, OnInit } from '@angular/core';
import { NicePlace } from '../models/nice-place-model';

@Component({
  selector: 'app-nice-place',
  templateUrl: './nice-place.component.html',
  styleUrls: ['./nice-place.component.scss']
})
export class NicePlaceComponent implements OnInit {

  likeButtonText!: string;

  @Input() nicePlace!: NicePlace;

  constructor() { }

  ngOnInit(): void {
    this.likeButtonText = "J'aime !";
  }

  onLike(){
    if(this.likeButtonText === "J'aime !"){
      this.nicePlace.likes++;
      this.likeButtonText = "Je n'aime plus !";
    } else {
      this.nicePlace.likes--;
      this.likeButtonText = "J'aime !";
    }
  }

}
