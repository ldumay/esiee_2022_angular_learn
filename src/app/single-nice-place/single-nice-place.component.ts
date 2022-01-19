import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NicePlace } from '../models/nice-place-model';
import { NicePlacesServices } from '../services/nice-place-services';

@Component({
  selector: 'app-single-nice-place',
  templateUrl: './single-nice-place.component.html',
  styleUrls: ['./single-nice-place.component.scss']
})
export class SingleNicePlaceComponent implements OnInit {

  likeButtonText!: string;
  commentaires!:string[];

  @Input() nicePlace!: NicePlace;

  constructor(private nicePlacesServices: NicePlacesServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nicePlaceId = parseInt(this.route.snapshot.params['id']);
    this.nicePlace = this.nicePlacesServices.getNicePlaceByID(nicePlaceId);
    this.commentaires = this.nicePlacesServices.getAllCommentsByNicePlaceID(nicePlaceId);
    console.log(this.commentaires);
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
