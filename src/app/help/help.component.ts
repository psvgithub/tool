import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; 
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{

  constructor(public authService: AuthService, public userService: UserService) { }

  ngOnInit(){
        if(this.authService.isLoggedIn()){
        showAsLoggedIn(this.userService.getUserName());
      } 
      else {
        showLoggedOutProfileMenu();
      }
  }
}
