import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{
  username: string;
  password: string;
  tryingToLogInMessage: string;
  isBadCredentials: boolean;
  badCredentialsMessage = 'Bad Credentials';

  constructor(public authService: AuthService, public router: Router) {
    this.isBadCredentials = false;
    this.setMessage();
  }

  setMessage() {
    this.tryingToLogInMessage = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }
  login() {
    this.tryingToLogInMessage = 'Trying to log in ...';
    this.authService.login(this.username, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        // Redirect the user
        this.router.navigate([redirect]);
        this.isBadCredentials = false;
        showAsLoggedIn(localStorage.getItem('userName'));                 
      }
      if (!this.authService.isLoggedIn()) {
        this.isBadCredentials = true;
      }
    });

  }
}
