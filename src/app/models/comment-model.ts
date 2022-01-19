export class Comment{
    id!: number;
    nicePlaceId!: number;
    logoUrl!:string;
    author!: string;
    content!: string;
    createDate!: Date;

    constructor(
        id:number,
        nicePlaceId:number,
        logoUrl: string,
        author:string,
        content:string,
        createDate: Date){
        
        this.id = id;
        this.nicePlaceId = nicePlaceId;
        this.logoUrl = logoUrl;
        this.author = author;
        this.content = content;
        this.createDate = createDate;
    }
}