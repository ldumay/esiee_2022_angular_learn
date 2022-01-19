import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment-model';
import { CommentsServices } from '../services/comment-services';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  myComments!:Comment[];

  constructor(private commentsServices: CommentsServices) { }

  ngOnInit(): void {
    this.myComments = this.commentsServices.getAllComments();
  }
}
