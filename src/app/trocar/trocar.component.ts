import { Component, OnInit, Input } from '@angular/core';
import { TelaProdutoComponent } from '../tela-produto/tela-produto.component';
import { MatDialog } from '@angular/material';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trocar',
  templateUrl: './trocar.component.html',
  styleUrls: ['./trocar.component.css']
})
export class TrocarComponent implements OnInit {
  
  games$: any = [];
  game: object;
  filteredvalues$: any = [];
  @Input() gameInformation = { nome: '', descricao: '', dataLancamento: '', imagem: '', tipo: 'Trocar', usuario_id: 1}
  panelOpenState = false;
  document: any;

  constructor(public dialog: MatDialog, private GamesApi: GamesApiService, public router: Router) { }

  ngOnInit() {
    this.loadGames()

  }

  addNewGame(dataGame) {
    this.GamesApi.registerNewGame(this.gameInformation).subscribe((data: {}) => {
      this.loadGames();
      window.alert('Jogo cadastrado para troca!')
    })
  }

  filterType(){
    return  this.games$.filter(jogo=>jogo.tipo ==='Trocar');
  }

  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
      this.games$ =  this.filterType()
    })
  }

  getSpecificGame(id) {
    return this.GamesApi.getSpecificGame(id).subscribe((data: {}) => {
      this.game = data;
      this.openDialog()
    })
  }

  getGameAndDialog(id) {
    this.getSpecificGame(id)
  }

  openDialog() {
    this.dialog.open(TelaProdutoComponent, {
      data: this.game
    });
  }
}
