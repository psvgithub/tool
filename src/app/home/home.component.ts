import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../service/auth.service'; 
import { Routes, RouterModule, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tool-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(
      private http: Http, 
      public authService: AuthService, 
      public router: Router,
      public userService : UserService) { }
  
  ngOnInit(){
        if(this.authService.isLoggedIn()){
        showAsLoggedIn(this.userService.getUserName());
      } 
      else {
        showLoggedOutProfileMenu();
      }
  }

  getRole() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http
      .get('/getRole', { headers }) 
      .map(res => res.json());
  }
}
 