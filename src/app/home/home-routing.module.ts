import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuardService } from '../login/auth-guard.service';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent , canActivate: [AuthGuardService] },
];

export class HomeRoutingModule { }

export const homeRoutedComponents: ModuleWithProviders = RouterModule.forChild(homeRoutes); 