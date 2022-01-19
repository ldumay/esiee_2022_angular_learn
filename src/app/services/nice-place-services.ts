import { Injectable } from "@angular/core";
import { NicePlace } from "../models/nice-place-model";

@Injectable({
    providedIn: 'root'
})

export class NicePlacesServices{
    myPlaces: NicePlace[] = [
        {
            id: 1,
            title: "Le lac de Côme 1",
            imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
            description: "Le lace de Côme ....",
            createDate: new Date,
            location: "Italie",
            score: 0.35,
            likes: 3,
            tag: "Lac"
          },
          {
            id: 2,
            title: "Le lac de Côme 2",
            imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
            description: "Le lace de Côme ....",
            createDate: new Date,
            location: "Italie",
            score: 0.75,
            likes: 3,
            tag: "Lac"
          },
          {
            id: 3,
            title: "Le lac de Côme 3",
            imageUrl: "https://esiee-it.o3digital.net/data/img/20190514_155112.resized.jpg",
            description: "Le lace de Côme ....",
            createDate: new Date,
            location: "Italie",
            score: 0.53,
            likes: 3,
            tag: "Lac"
          }
    ];

    getAllNicePlaces(): NicePlace[]{
        return this.myPlaces;
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