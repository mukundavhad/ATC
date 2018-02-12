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
import { AgGridModule } from 'ag-grid-angular';
import { AdminMenuComponent } from 'app/admin-page/admin-menu/admin-menu.component';
import { UserRegComponent } from 'app/admin-page/user-reg/user-reg.component';
import { EmpGridComponent } from './admin-page/emp-grid/emp-grid.component';
import { VedGridComponent } from './admin-page/ved-grid/ved-grid.component';
import { HeaderComponent } from './admin-page/header/header.component';
import { EmpHeaderComponent } from './emp-page/emp-header/emp-header.component';
import { AdminPageComponent } from 'app/admin-page/admin-page.component';
import { ServGridComponent } from './emp-page/serv-grid/serv-grid.component';
import { VendGridComponent } from './emp-page/vend-grid/vend-grid.component';
import { TowerGridComponent } from './emp-page/tower-grid/tower-grid.component';
import { MtrlGridComponent } from './emp-page/mtrl-grid/mtrl-grid.component';
import { MngMtrlComponent } from './emp-page/mng-mtrl/mng-mtrl.component';
import { TwrMngComponent } from './emp-page/twr-mng/twr-mng.component';
import { AccordComponent } from './admin-page/admin-menu/accord/accord.component';
import { EmpInitGridComponent } from './emp-page/dashboard/emp-init-grid/emp-init-grid.component';
import { EmpMtrlGridComponent } from './emp-page/dashboard/emp-mtrl-grid/emp-mtrl-grid.component';
import { EmpFinalGridComponent } from './emp-page/dashboard/emp-final-grid/emp-final-grid.component';
import { EmpCmpltGridComponent } from './emp-page/dashboard/emp-cmplt-grid/emp-cmplt-grid.component';
import { EmpInitFormComponent } from './emp-page/dashboard/emp-init-form/emp-init-form.component';
import { EmpMtrlFormComponent } from './emp-page/dashboard/emp-mtrl-form/emp-mtrl-form.component';
import { EmpFinalFormComponent } from './emp-page/dashboard/emp-final-form/emp-final-form.component';
import { EmpCmpltFormComponent } from './emp-page/dashboard/emp-cmplt-form/emp-cmplt-form.component';
import { CompanyListComponent } from './admin-page/admin-menu/company-list/company-list.component';
import { MtrlFormComponent } from './emp-page/mng-mtrl/mtrl-form/mtrl-form.component';
import { TwrFormComponent } from './emp-page/twr-mng/twr-form/twr-form.component';
import { ServFormComponent } from './emp-page/serv-manage/serv-form/serv-form.component';
import { VendorPageComponent } from 'app/vendor-page/vendor-page.component';
import { VendDashboardComponent } from './vendor-page/vend-dashboard/vend-dashboard.component';
import { VendHeaderComponent } from './vendor-page/vend-header/vend-header.component';


@NgModule({

  declarations: [
    VendorPageComponent,
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
    EmpHeaderComponent, 
    AdminPageComponent, 
    ServGridComponent, 
    VendGridComponent, 
    TowerGridComponent, 
    MtrlGridComponent, 
    MngMtrlComponent, 
    TwrMngComponent, 
    AccordComponent, 
    EmpInitGridComponent, 
    EmpMtrlGridComponent, 
    EmpFinalGridComponent, 
    EmpCmpltGridComponent, 
    EmpInitFormComponent, 
    EmpMtrlFormComponent, 
    EmpFinalFormComponent, 
    EmpCmpltFormComponent, CompanyListComponent, MtrlFormComponent, TwrFormComponent, ServFormComponent, VendDashboardComponent, VendHeaderComponent   
    
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
