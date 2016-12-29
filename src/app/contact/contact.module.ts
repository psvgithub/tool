import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { contactRoutedComponents } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    contactRoutedComponents
  ],
  declarations: [ContactComponent] 
})
export class ContactModule { } 