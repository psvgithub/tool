import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(username, password):  Observable<any>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');        
        return this.http
            .post(
            'http://localhost:8080/portal/auth',
            JSON.stringify({ username, password }),
            { headers }
            )
            .map(res => res.json())
            .map((res) => {
                if (res.authenticate) {
                    localStorage.setItem('auth_token', res.auth_token);
                    localStorage.setItem('userName', res.userName);
                    this.loggedIn = true;
                    return res.authenticate;
                } else {
                    this.loggedIn = false;
                    this.errMsg = res.errorMessage;
                    return res.authenticate;
                }
            }).catch(this.handleError);
    }

    getErrorMessage(){
        return this.errMsg;
    }

    logout(): void {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('userName');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     console.log('body : ' + body);
    //     return body.data || {};
    // }

    // private extractTestData(res: Response) {
    //     let body = res.json();
    //     console.log('body : ' + body);
    //     return body.data.testUser || {};
    // }

    // private handleError(error: any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     this.errMsg;
    //     if(error.status === 0){
    //         this.errMsg = 'Server is unavailable now, please try again later or contact administrator.'
    //     } else {
    //         this.errMsg = `${error.status} - ${error.statusText}`;
    //     }

    //     console.error(this.errMsg);
    //     return Promise.reject(this.errMsg);
    // }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            if (error.type === 3) {
                errMsg = 'The auth server is unavailable now. Please try again later.';                
            } else {
               const body = error.json() || '';
                const err = body.error || JSON.stringify(body);
                errMsg = `${error.status} - ${error.statusText || ''} ${err}`; 
            }            
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}