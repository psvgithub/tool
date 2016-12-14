import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: 'contact', component: ContactComponent},
];

export class ContactRoutingModule { }

export const contactRoutedComponents: ModuleWithProviders = RouterModule.forChild(contactRoutes);  