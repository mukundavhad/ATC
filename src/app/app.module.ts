import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './emp-page/dashboard/dashboard.component';
import { ActionBoxComponent } from './emp-page/dashboard/action-box/action-box.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CopyrightComponent } from './home/copyright/copyright.component';
import { EmpPageComponent } from './emp-page/emp-page.component';
import { EmpMenuComponent } from './emp-page/emp-menu/emp-menu.component';
import { VendManageComponent } from './emp-page/vend-manage/vend-manage.component';
import { ServManageComponent } from './emp-page/serv-manage/serv-manage.component';
import { NewServiceComponent } from './emp-page/serv-manage/new-service/new-service.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ActionBoxComponent,
    MainHeaderComponent,
    CopyrightComponent,
    EmpPageComponent,
    EmpMenuComponent,
    VendManageComponent,
    ServManageComponent,
    NewServiceComponent
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
