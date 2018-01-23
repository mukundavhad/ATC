import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


// or
import { BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionBoxComponent } from './dashboard/action-box/action-box.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ActionBoxComponent,
    MainHeaderComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
