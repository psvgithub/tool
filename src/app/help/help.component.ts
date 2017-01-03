import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from '../service/auth.service'; 

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // if(this.authService.isLoggedIn()){
    //   showAsLoggedIn(localStorage.getItem('userName'));
    // }    
  }
}
