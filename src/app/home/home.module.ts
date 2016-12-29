import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutedComponents } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    homeRoutedComponents
  ],
  declarations: [HomeComponent] 
})
export class HomeModule { } 
