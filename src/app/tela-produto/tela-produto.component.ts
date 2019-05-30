import { Component, Inject , OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../DialogData';
import { GamesApiService } from '../services/games-api.service';
import { Router } from '@angular/router';
import { ContatoComponent } from '../contato/contato.component';

@Component({
  selector: 'app-tela-produto',
  templateUrl: './tela-produto.component.html',
  styleUrls: ['./tela-produto.component.css']
})
export class TelaProdutoComponent{

  games$: any = [];

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<TelaProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private GamesApi: GamesApiService, public router: Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadGames() {
    return this.GamesApi.getAllGames().subscribe((data: {}) => {
      this.games$ = data;
    })
  }

  deleteGame(id) {
    if (window.confirm('Deseja deletar esse jogo?')){
      this.GamesApi.deleteGame(id).subscribe(data => {
        this.loadGames();
        this.dialogRef.close();
      })
    }
  }  

  openDialogUser(): void {
      this.dialog.open(ContatoComponent, {
      width: '500px',
      height: '320px'
    });
  }

}
