import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './emp-page/dashboard/dashboard.component';
import { ActionBoxComponent } from './emp-page/dashboard/action-box/action-box.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CopyrightComponent } from './home/copyright/copyright.component';
import { from } from 'rxjs/observable/from';
import { Router } from '@angular/router/src/router';
import { appRoutes } from './routeconfig';
import { ServManageComponent } from './emp-page/serv-manage/serv-manage.component';
import { VendManageComponent} from './emp-page/vend-manage/vend-manage.component';
import { EmpMenuComponent } from 'app/emp-page/emp-menu/emp-menu.component';
import { NewServiceComponent } from 'app/emp-page/serv-manage/new-service/new-service.component';
import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import{AgGridModule} from 'ag-grid-angular';
import { AdminMenuComponent } from 'app/admin-page/admin-menu/admin-menu.component';
import { UserRegComponent } from 'app/admin-page/user-reg/user-reg.component';
import { GridsystemComponent } from './emp-page/gridsystem/gridsystem.component';
import { EmpGridComponent } from './admin-page/emp-grid/emp-grid.component';
import { VedGridComponent } from './admin-page/ved-grid/ved-grid.component';
import { HeaderComponent } from './admin-page/header/header.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ActionBoxComponent,
    MainHeaderComponent,
    CopyrightComponent,
    ServManageComponent,
    VendManageComponent,
    EmpMenuComponent,
    NewServiceComponent,
    AdminMenuComponent,
    UserRegComponent,
    EmpGridComponent,
    VedGridComponent,
    HeaderComponent,
    GridsystemComponent,    
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([ ]),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
