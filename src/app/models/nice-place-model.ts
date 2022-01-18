export class NicePlace{
    title!: string;
    imageUrl!: string;
    description!: string;
    createDate!: Date;
    location!: string;
    score!: number;
    likes!: number;
    tag?: string;

    constructor(title:string, imageUrl:string, 
        description:string, createDate:Date, 
        location:string, score:number, 
        likes:number, tag:string){
        
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.createDate = createDate;
        this.location = location;
        this.score = score;
        this.likes = likes;
        this.tag = tag;
    }
}