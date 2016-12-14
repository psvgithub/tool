import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';

const helpRoutes: Routes = [
  { path: 'help', component: HelpComponent},
];

export class HelpRoutingModule { }

export const helpRoutedComponents: ModuleWithProviders = RouterModule.forChild(helpRoutes);  