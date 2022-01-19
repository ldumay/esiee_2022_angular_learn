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
    commentaires?: string[];

    constructor(
        id:number,
        title:string, imageUrl:string, 
        description:string, createDate:Date, 
        location:string, score:number, 
        likes:number, tag:string,
        commentaires: string[]){
        
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.createDate = createDate;
        this.location = location;
        this.score = score;
        this.likes = likes;
        this.tag = tag;
        this.commentaires = commentaires;
    }
}