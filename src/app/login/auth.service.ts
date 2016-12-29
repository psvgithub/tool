import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { TestUser } from '../model/testUser';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private loggedIn: boolean = false;
    testUrl = 'http://localhost:8080/portal/ajaxtest';
    private pingUrl = 'http://localhost:8080/portal/ajaxtest';  // ping backend
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(username, password) {
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
                    this.loggedIn = true;
                    return res.isAuthenticate; 
                } else {
                    this.loggedIn = false;
                    return res.authenticate;
                }                
            });
    }

    logout(): void {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    public test(): Observable<TestUser>{
        return this.http.get(this.pingUrl)
            .map(this.extractTestData)
            .catch(this.handleError); 
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log('body : ' + body); 
        return body.data || {};
    }

    private extractTestData(res: Response) {
        let body = res.json();
        console.log('body : ' + body);
        return body.data.testUser || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}