import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  games$: any = [];
  constructor(private GamesApi: GamesApiService, public router: Router) { }

  ngOnInit() {
    this.loadGames()
  }

  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
    })
  }

}
