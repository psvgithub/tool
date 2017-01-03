import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService }      from '../service/auth-guard.service';
import { AuthService }    from '../service/auth.service';
import { LogoutComponent } from './logout.component';
import { NgModule, ModuleWithProviders  } from '@angular/core';

export const logoutRoutes: Routes = [
  { path: 'logout', component: LogoutComponent }
];
export const logoutAuthProviders = [
  AuthGuardService,
  AuthService
];

export class LogoutRoutingModule { }

export const logoutRoutedComponents: ModuleWithProviders = RouterModule.forChild(logoutRoutes);  