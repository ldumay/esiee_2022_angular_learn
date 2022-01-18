export class NicePlace{
    title: string;
    imageUrl: string;
    description: string;
    createDate: Date;
    location: string;
    score: number;
    likes: number;

    constructor(title:string, imageUrl:string, 
        description:string, createDate:Date, 
        location:string, score:number, 
        likes:number){
        
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.createDate = createDate;
        this.location = location;
        this.score = score;
        this.likes = likes;
    }
}