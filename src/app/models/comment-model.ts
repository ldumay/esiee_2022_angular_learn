export class Comment{
    id!: number;
    nicePlaceId!: number;
    author!: string;
    content!: string;
    createDate!: Date;

    constructor(
        id:number,
        nicePlaceId:number,
        author:string,
        content:string,
        createDate: Date){
        
        this.id = id;
        this.nicePlaceId = nicePlaceId;
        this.author = author;
        this.content = content;
        this.createDate = createDate;
    }
}