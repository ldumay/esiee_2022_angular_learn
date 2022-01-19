import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment-model';
import { CommentsServices } from '../services/comment-services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comment;

  constructor(private commentsServices: CommentsServices) { }

  ngOnInit(): void {
    //this.comment = this.commentsServices.getAllComments();
  }

}
