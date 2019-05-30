import { Component, OnInit, Input } from '@angular/core';
import { TelaProdutoComponent } from '../tela-produto/tela-produto.component';
import { MatDialog } from '@angular/material';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent {

  games$: any = [];
  game: object;

  @Input() gameInformation = { nome: '', descricao: '', dataLancamento: '', imagem: '', tipo: 'Vender',  usuario_id: 1}
  panelOpenState = false;
  document: any;

  constructor(public dialog: MatDialog, private GamesApi: GamesApiService, public router: Router) { }

  ngOnInit() {
    this.loadGames()
  }

  addNewGame(dataGame) {
    this.GamesApi.registerNewGame(this.gameInformation).subscribe((data: {}) => {
      this.loadGames();
      console.log(this.gameInformation)
      window.alert('Jogo Cadastrado Para Venda!')
    })
  }
  
  filterType() {
    return this.games$.filter(jogo => jogo.tipo === 'Vender');
  }

  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
      this.games$ = this.filterType()
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
