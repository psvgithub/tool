import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HelpModule } from './help/help.module';
import { appRouting, appRoutingProviders }  from './app-routing.module';
import { LoginComponent }       from './login/login.component';
import { LogoutModule } from './logout/logout.module';
import { ServiceProviderModule, serviceProvider } from './services/service-provider/service-provider.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    HelpModule,
    LogoutModule,
    appRouting,
    ServiceProviderModule
  ],
  providers: [appRoutingProviders, serviceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
