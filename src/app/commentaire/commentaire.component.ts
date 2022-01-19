import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../models/commentaire-model';
import { CommentairesServices } from '../services/commentaire-service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {

  commentaire!: Commentaire[];

  constructor(private commentairesServices: CommentairesServices) { }

  ngOnInit(): void {
    this.commentaire = this.commentairesServices.getAllCommentaires();
  }

}
