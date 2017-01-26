
import { Injectable } from '@angular/core';
import { ToolUser } from '../model/user/toolUser';

@Injectable()
export class UserService{

    /**
     * setUser
     */
    public setUser(user : ToolUser) {
         localStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * getUser : ToolUser
     */
    public  getUser() : ToolUser{        
        return JSON.parse(localStorage.getItem('user'));
    }

    /**
     * deleteUser
     */
    public deleteUser() {
        localStorage.removeItem('user');
    }

    /**
     * getUserName
     */
    public getUserName() : string {
       let user : ToolUser  = this.getUser();
       return user.name;        
    }

    /**
     * getAuthToken
     */
    public getAuthToken(): string {
        let user : ToolUser  = this.getUser();
        return user.authToken;        
    }
}
