import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/comment-model';
import { NicePlace } from '../models/nice-place-model';
import { CommentsServices } from '../services/comment-services';
import { NicePlacesServices } from '../services/nice-place-services';

@Component({
  selector: 'app-single-nice-place',
  templateUrl: './single-nice-place.component.html',
  styleUrls: ['./single-nice-place.component.scss']
})
export class SingleNicePlaceComponent implements OnInit {

  likeButtonText!: string;
  nicePlace!: NicePlace;
  nicePlaceComments!:Comment[];

  constructor(private nicePlacesServices: NicePlacesServices,
    private commentsServices: CommentsServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const nicePlaceId = parseInt(this.route.snapshot.params['id']);
    this.nicePlace = this.nicePlacesServices.getNicePlaceByID(nicePlaceId);
    this.likeButtonText = "J'aime !";
    this.nicePlaceComments = this.commentsServices.getAllCommentsByNicePlaceID(this.nicePlace.id);
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
