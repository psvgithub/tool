import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HelpModule } from './help/help.module';
import { ContactModule } from './contact/contact.module';
import { appRouting, appRoutingProviders }  from './app-routing.module';
import { LoginComponent }       from './login/login.component';
import { HelpComponent }       from './help/help.component';
import { ContactComponent }       from './contact/contact.component';

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
    ContactModule,
    appRouting,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
