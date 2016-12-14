import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { contactRoutedComponents } from './contact-routing.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    contactRoutedComponents,
    MaterialModule.forRoot()
  ],
  declarations: [ContactComponent] 
})
export class ContactModule { } 