import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatPaginator } from '@angular/material';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-meusprodutos',
  templateUrl: './meusprodutos.component.html',
  styleUrls: ['./meusprodutos.component.css']
})

export class MeusprodutosComponent implements OnInit {

 
  games$: any = [];
  game: object;



  constructor(public dialog: MatDialog, private GamesApi: GamesApiService, public router: Router) { }

  ngOnInit() {
    this.loadGames()
    console.log(this.loadGames())
  }
  
  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
    })
  }

}
