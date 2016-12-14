import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'tool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TOOL';
  
  constructor(public authService: AuthService, public router: Router) {
  }
    
  logout(){
    this.authService.logout();
    this.login();
  }

  login(){
    this.router.navigate(['login']);
  }

}
