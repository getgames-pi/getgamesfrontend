import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {
  users$: any = []
  
  @Input() userInformation = { nome: '', cpf: '', email:'', telefone:'', password: '', tipousuario: 0}

  constructor(private Auth: AuthService, public router: Router) { }
  ngOnInit() {
  }

  addNeWUser(dataGame) {
    this.Auth.registerUser(this.userInformation).subscribe((data: {}) => {
      this.loadUsers();
      window.alert('Usuário Cadastrado!')
      console.log(this.userInformation)
    })
  }

  loadUsers() {
    return this.Auth.getAllUser().subscribe((data: {}) => {
      this.users$ = data;
    })
  }

}
