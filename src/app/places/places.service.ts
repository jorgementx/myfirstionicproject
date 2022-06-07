import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg',
      comments: ['Awesome place', 'wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://www.nps.gov/common/uploads/grid_builder/stli/crop16_9/7DBAB193-E4E7-80BE-262BCF6D65A24D88.jpg',
      comments: ['I loved it', 'wonderful experience']
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL: 'https://www.nps.gov/common/uploads/grid_builder/stli/crop16_9/7DBAB193-E4E7-80BE-262BCF6D65A24D88.jpg',
      comments: []
    },
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    // return {...this.places[placeId - 1]}
    return {...this.places.find(place => place.id === placeId)};
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter( place => place.id !== placeId);
  }

  // updatePlace(placeId: string, title: string, imageURL: string) {
  //   this.places[+placeId - 1].title = title;
  //   this.places[+placeId - 1].imageURL = imageURL;
  // }

}
