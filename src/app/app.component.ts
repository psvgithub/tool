import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'tool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TOOL';
  
  constructor(public authService: AuthService, public router: Router) {
  }

  login(){
    this.router.navigate(['login']);
  }

  ngOnInit(){
  setTimeout(() => {
            // run jQuery stuff here
      }, 0);
  }
}


