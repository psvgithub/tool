import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes, loginAuthProviders }  from './login/login.routing';
// import { logoutRoutes, logoutAuthProviders }  from './logout/logout.routing';

const appRoutes: Routes = [...loginRoutes];

export const appRoutingProviders: any[] = [loginAuthProviders];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
