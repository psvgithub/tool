import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutedComponents } from './home-routing.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    homeRoutedComponents,
    MaterialModule.forRoot()
  ],
  declarations: [HomeComponent] 
})
export class HomeModule { } 
