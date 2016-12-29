import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { helpRoutedComponents } from './help-routing.module';

@NgModule({
  imports: [
    CommonModule,
    helpRoutedComponents
  ],
  declarations: [HelpComponent] 
})
export class HelpModule { } 