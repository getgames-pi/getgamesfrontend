import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user-model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users$ : User[];
  
  constructor(private breakpointObserver: BreakpointObserver, private Auth: AuthService) {}
  
  ngOnInit() {
  
  }
}
