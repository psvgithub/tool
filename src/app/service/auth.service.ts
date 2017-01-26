import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ToolUser } from '../model/user/toolUser';
import { UserService } from '../services/user.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    private loggedIn: boolean = false;
    private errMsg: string;
    constructor(private http: Http, private userService: UserService) {
        //this.loggedIn = !!localStorage.getItem('auth_token');
        this.loggedIn = !!this.userService.getUser();
    }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(username, password): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(
            'http://localhost:8080/portal/auth',
            JSON.stringify({ username, password }),
            { headers }
            )
            .map(user => user.json())
            .map((user) => {
                // if (res.authenticate) {
                //     localStorage.setItem('auth_token', res.auth_token);
                //     localStorage.setItem('userName', res.userName);
                //     this.loggedIn = true;                    
                //     return res.authenticate;
                // } else {
                //     this.loggedIn = false;
                //     this.errMsg = res.errorMessage;
                //     return res.authenticate;
                // }
                let toolUser : ToolUser = new ToolUser(user.name, user.authToken, user.roles);
                this.userService.setUser(toolUser);
                this.loggedIn = true;
                return true;
            }).catch(this.handleError);
    }

    getErrorMessage() {
        return this.errMsg;
    }

    logout(): void {
        this.userService.deleteUser();
        // localStorage.removeItem('auth_token');
        // localStorage.removeItem('userName');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            if (error.type === 3) {
                errMsg = 'The server is unavailable now. Please try again later.'
            } else {
               errMsg = `${error.status} - ${error.statusText || ''}`; 
            }            
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}