import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes, authProviders }  from './login/login.routing';

const appRoutes: Routes = [...loginRoutes];

export const appRoutingProviders: any[] = [authProviders];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
