import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

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
  errorMessage: string;

  constructor(public authService: AuthService, public router: Router) {
    this.isBadCredentials = false;
  }

  showSpinner() {
    console.log('showSpinner()');
  }

  hideSpinner(){
    console.log('hideSpinner()');
  }

  login() {
    this.showSpinner();
    this.authService.login(this.username, this.password).subscribe(
      success => {
              this.hideSpinner();
              if (success) {                
                showAsLoggedIn(localStorage.getItem('userName'));  
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
                this.router.navigate([redirect]);
              } else {
                this.errorMessage = this.authService.getErrorMessage();
              }
            },
       error => {
         this.hideSpinner();
         this.errorMessage = <any> error
        }
    );
  }
}
