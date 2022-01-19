import { Comment } from "./comment-model";

export class NicePlace{
    id!: number;
    title!: string;
    imageUrl!: string;
    description!: string;
    createDate!: Date;
    location!: string;
    score!: number;
    likes!: number;
    tag?: string;
    comments?: Comment[];

    constructor(
        id:number,
        title:string, imageUrl:string, 
        description:string, createDate:Date, 
        location:string, score:number, 
        likes:number, tag:string,
        comments: Comment[]){
        
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.createDate = createDate;
        this.location = location;
        this.score = score;
        this.likes = likes;
        this.tag = tag;
        this.comments = comments;
    }
}