import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { logoutRoutedComponents } from './logout.routing';

@NgModule({
  imports: [
    CommonModule,
    logoutRoutedComponents
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule { 

  constructor(){
    showLoggedOutProfileMenu(); 
  }  
}
