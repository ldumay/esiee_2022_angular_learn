import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NicePlace } from "../models/nice-place-model";
import { CommentsServices } from "./comment-services";

const localURL: string = "assets/data/niceplaces-list.json";

@Injectable({
    providedIn: 'root'
})

export class NicePlacesServices{
    
	private myPlaces!: NicePlace[];

	constructor(private http: HttpClient,
        private commentsServices: CommentsServices) {
		this.myPlaces = [];
		this.getNicePlacesList();
	}

	private getNicePlacesList(): void {
		this.http.get(localURL).subscribe(data => {
			for (let d of (data as any)) {
				this.myPlaces.push({
					id: d.id,
					title: d.title,
					description: d.description,
					imageUrl: d.imageURL,
					createDate: new Date(d.creationDate),
					location: d.location,
					score: d.score,
					likes: d.likes
				});
			}
			console.log(this.myPlaces);
		})
	}

    getAllNicePlaces(): NicePlace[]{
        return this.myPlaces;
    }
    
    getNicePlaceByID(nicePlaceId: number): NicePlace{
        const nicePlace = this.myPlaces.find(nicePlace => nicePlace.id === nicePlaceId);
        if(!nicePlace){
            throw new Error("NicePlace not found !");  
        } else {
            return nicePlace;
        }
    }

    likeNicePlaceByID(nicePlaceId: number, action: "like" | "unlike"): void{
        const nicePlace = this.myPlaces.find(nicePlace => nicePlace.id === nicePlaceId);
        if(nicePlace){
            if(action === "like"){
                nicePlace.likes++;
            } else {
                nicePlace.likes--;
            }
        } else {
            throw new Error("NicePlace not found !"); 
        }
    }
}