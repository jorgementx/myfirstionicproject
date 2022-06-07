import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.page.html',
  styleUrls: ['./anime-list.page.scss'],
})
export class AnimeListPage implements OnInit {

  animeList = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getAnimes('Jmentx')
      .subscribe(data => {
        console.log(data);
        this.animeList = data;
      });
  }

}
