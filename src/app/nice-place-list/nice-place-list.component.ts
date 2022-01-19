import { Component, OnInit } from '@angular/core';
import { NicePlace } from '../models/nice-place-model';
import { NicePlacesServices } from '../services/nice-place-services';

@Component({
  selector: 'app-nice-place-list',
  templateUrl: './nice-place-list.component.html',
  styleUrls: ['./nice-place-list.component.scss']
})
export class NicePlaceListComponent implements OnInit {
  myPlaces!:NicePlace[];
  constructor(private nicePlacesServices: NicePlacesServices) { }

  ngOnInit(): void {
    this.myPlaces = this.nicePlacesServices.getAllNicePlaces();
  }
}
