import { Component, Input, OnInit } from '@angular/core';
import { NicePlace } from '../models/nice-place-model';
import { NicePlacesServices } from '../services/nice-place-services';

@Component({
  selector: 'app-single-nice-place',
  templateUrl: './single-nice-place.component.html',
  styleUrls: ['./single-nice-place.component.scss']
})
export class SingleNicePlaceComponent implements OnInit {

  likeButtonText!: string;

  @Input() nicePlace!: NicePlace;

  constructor(private nicePlacesServices: NicePlacesServices) { }

  ngOnInit(): void {
    this.likeButtonText = "J'aime !";
  }

  onLike(){
    if(this.likeButtonText === "J'aime !"){
      this.nicePlacesServices.likeNicePlaceByID(this.nicePlace.id, "like");
      this.likeButtonText = "Je n'aime plus !";
    } else {
      this.nicePlacesServices.likeNicePlaceByID(this.nicePlace.id, "unlike");
      this.likeButtonText = "J'aime !";
    }
  }

}
