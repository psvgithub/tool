import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';
import { TestUser } from '../model/testUser';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent {
  testUser: TestUser;
  errorMessage: string;
  username: string;
  password: string;
  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });

  }
  // login() {
  //   this.authService.login(this.name, this.password).subscribe((result) => {
  //     if (result) {
  //       this.router.navigate(['home']);
  //     }
  //   });
  // }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
  test(){ 

        console.log('start test()');
        this.authService.test()
                   .subscribe(
                     testUser => this.testUser = testUser,
                     error =>  this.errorMessage = <any>error);
        console.log('testUser.name : ' + this.testUser.name); 
        console.log('testUser.age : ' + this.testUser.age); 
        console.log('end ping()'); 
  }
}
