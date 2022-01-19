import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "../models/comment-model";

const localURL: string = "assets/data/comments.json";

@Injectable({
    providedIn: 'root'
})

export class CommentsServices{

    private myComments!: Comment[];

    constructor(private http: HttpClient){
        this.myComments = [];
        this.getCommentsList();
    }

    private getCommentsList(): void {
		this.http.get(localURL).subscribe(data => {
			for (let d of (data as any)) {
				this.myComments.push({
                    id: d.id,
                    nicePlaceId: d.nicePlaceId,
                    author: d.author,
                    content: d.content,
                    createDate: d.createDate
				});
			}
			console.log(this.myComments);
		})
	}

    getAllComments(): Comment[]{
        return this.myComments;
    }

    getCommentByID(commentId: number): Comment{
        const comment = this.myComments.find(comment => comment.id === commentId);
        if(!comment){
            throw new Error("NicePlace not found !");  
        } else {
            return comment;
        }
    }
}