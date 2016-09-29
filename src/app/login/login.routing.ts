import { Routes }         from '@angular/router';
import { AuthGuardService }      from './auth-guard.service';
import { AuthService }    from './auth.service';
import { LoginComponent } from './login.component';
export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
export const authProviders = [
  AuthGuardService,
  AuthService
];