import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getAnimes(user: string, offset: string ='0') {
    return this.http.get<any>(`http://myanimelist.net/animelist/${user}/load.json?offset=${offset}`);
  }
}
