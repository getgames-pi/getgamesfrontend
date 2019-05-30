import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() { 
    this.isUserLoggedIn=this.authService.isUserLoggedIn();
  }
  username = ''
  password = ''
  invalidLogin = false

  isUserLoggedIn:boolean = false;

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/home-usuario'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}
