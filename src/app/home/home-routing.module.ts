import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuardService } from '../service/auth-guard.service';
import {LoginComponent} from '../login/login.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent , canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
];

export class HomeRoutingModule { }

export const homeRoutedComponents: ModuleWithProviders = RouterModule.forChild(homeRoutes);  