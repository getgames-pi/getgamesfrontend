import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TelaProdutoComponent } from '../tela-produto/tela-produto.component';
import { MatDialog, MatPaginator } from '@angular/material';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {
  

  games$: any = [];
  game: object;
  @Input() gameInformation = { nome: '', descricao: '', dataLancamento: '', imagem: '', tipo: 'Comprar', usuario_id:1}
  panelOpenState = false;


  constructor(public dialog: MatDialog, private GamesApi: GamesApiService, public router: Router) { }

  ngOnInit() {
    this.loadGames()
  }

  addNewGame(dataGame) {
    this.GamesApi.registerNewGame(this.gameInformation).subscribe((data: {}) => {
      this.loadGames();
      window.alert('Jogo cadastrado para compra!')
    })
  }

  filterType(){
    return  this.games$.filter(jogo=>jogo.tipo ==='Vender');
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
    console.log(this.game)
    this.dialog.open(TelaProdutoComponent, {
      data: this.game

    });
  }
}
