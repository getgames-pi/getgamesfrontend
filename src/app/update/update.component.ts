import { Component, OnInit } from '@angular/core';
import { GamesApiService } from '../services/games-api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params  ['id'];
  gameData: any = {};
  games$: any = [];
  constructor(private GamesApi: GamesApiService, public router: Router, public actRoute: ActivatedRoute,) { }

  ngOnInit() { 
    this.GamesApi.getSpecificGame(this.id).subscribe((data: {}) => {
      this.gameData = data;
      console.log(this.gameData)
    })
  }

  upgateGames() {
    if(window.confirm('Deseja atualizar o jogo selecionado ?')){
      this.GamesApi.updateGame(this.id, this.gameData).subscribe(data => {
        this.router.navigate(['/home-usuario'])
      })
    }
  }

  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
    })
  }

}