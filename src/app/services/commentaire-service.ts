import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Commentaire } from "../models/commentaire-model";

const localURL: string = "assets/data/commentaires.json";

@Injectable({
    providedIn: 'root'
})

export class CommentairesServices{

    private myCommentaires!: Commentaire[];

    constructor(private http: HttpClient){
        this.myCommentaires = [];
        this.getCommentairesList();
    }

    private getCommentairesList(): void {
		this.http.get(localURL).subscribe(data => {
			for (let d of (data as any)) {
				this.myCommentaires.push({
                    id: d.id,
                    nicePlaceId: d.nicePlaceId,
                    author: d.author,
                    content: d.content,
                    createDate: d.createDate
				});
			}
			console.log(this.myCommentaires);
		})
	}

    getAllCommentaires(): Commentaire[]{
        return this.myCommentaires;
    }

    getCommentairesByID(commentaireId: number): Commentaire{
        const commentaire = this.myCommentaires.find(commentaire => commentaire.id === commentaireId);
        if(!commentaire){
            throw new Error("NicePlace not found !");  
        } else {
            return commentaire;
        }
    }
}