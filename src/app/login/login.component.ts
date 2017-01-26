import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
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
  //tryingToLogInMessage: string;
  errorMessage: string;

  constructor(public authService: AuthService, public router: Router, public userService: UserService) {}

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
                showAsLoggedIn(this.userService.getUserName());  
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
