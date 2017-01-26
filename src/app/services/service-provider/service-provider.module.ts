import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProviderComponent } from './service-provider.component';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServiceProviderComponent],
  providers: [UserService]
})
export class ServiceProviderModule { }

export const serviceProvider = [
  UserService,
];
