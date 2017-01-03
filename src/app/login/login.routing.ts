import { Routes }         from '@angular/router';
import { AuthGuardService }      from '../service/auth-guard.service';
import { AuthService }    from '../service/auth.service';
import { LoginComponent } from './login.component';
export const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];
export const loginAuthProviders = [
  AuthGuardService,
  AuthService
];