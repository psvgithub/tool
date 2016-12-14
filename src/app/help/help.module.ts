import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { helpRoutedComponents } from './help-routing.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    helpRoutedComponents,
    MaterialModule.forRoot()
  ],
  declarations: [HelpComponent] 
})
export class HelpModule { } 