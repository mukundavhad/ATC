import { Routes } from '@angular/router'
import { LoginComponent } from 'app/home/login/login.component';
import { HomeComponent } from 'app/home/home.component';
import { DashboardComponent } from 'app/emp-page/dashboard/dashboard.component';
import { ServManageComponent } from 'app/emp-page/serv-manage/serv-manage.component';
import { VendManageComponent } from 'app/emp-page/vend-manage/vend-manage.component';
import { AdminMenuComponent } from 'app/admin-page/admin-menu/admin-menu.component';
import { UserRegComponent } from 'app/admin-page/user-reg/user-reg.component';
import { EmpGridComponent } from 'app/admin-page/emp-grid/emp-grid.component';
import { HeaderComponent } from 'app/admin-page/header/header.component';
import { AdminPageComponent } from 'app/admin-page/admin-page.component';
import { MngMtrlComponent } from 'app/emp-page/mng-mtrl/mng-mtrl.component';
import { TwrMngComponent } from 'app/emp-page/twr-mng/twr-mng.component';
import { EmpInitGridComponent } from 'app/emp-page/dashboard/emp-init-grid/emp-init-grid.component';
import { EmpMtrlGridComponent } from 'app/emp-page/dashboard/emp-mtrl-grid/emp-mtrl-grid.component';
import { EmpFinalGridComponent } from 'app/emp-page/dashboard/emp-final-grid/emp-final-grid.component';
import { EmpCmpltGridComponent } from 'app/emp-page/dashboard/emp-cmplt-grid/emp-cmplt-grid.component';
import { CompanyListComponent } from 'app/admin-page/admin-menu/company-list/company-list.component';
import { VedGridComponent } from 'app/admin-page/ved-grid/ved-grid.component';
import { VendDashboardComponent } from 'app/vendor-page/vend-dashboard/vend-dashboard.component';
import { VendInitGridComponent } from 'app/vendor-page/vend-dashboard/vend-init-grid/vend-init-grid.component';
import { VendMtrlGridComponent } from 'app/vendor-page/vend-dashboard/vend-mtrl-grid/vend-mtrl-grid.component';
import { VendFinalGridComponent } from 'app/vendor-page/vend-dashboard/vend-final-grid/vend-final-grid.component';
import { VendCmpltGridComponent } from 'app/vendor-page/vend-dashboard/vend-cmplt-grid/vend-cmplt-grid.component';

export const appRoutes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'ServManage', component: ServManageComponent },
    { path: 'VendManage', component: VendManageComponent },
    { path: 'atc/emp-grid', component: EmpGridComponent },
    { path: 'atc/ved-grid', component: VedGridComponent},
    { path: 'header', component: HeaderComponent },
    { path: 'AdminPage', component: AdminPageComponent },
    { path: 'MngMtrl', component: MngMtrlComponent },
    { path: 'TwrMng', component: TwrMngComponent },
    { path: 'Dashboard/InitGrid', component: EmpInitGridComponent },
    { path: 'Dashboard/MtrlGrid', component: EmpMtrlGridComponent },
    { path: 'Dashboard/FinalGrid', component: EmpFinalGridComponent },
    { path: 'Dashboard/CmpltGrid', component: EmpCmpltGridComponent }, 
    { path: 'CompanyList', component: CompanyListComponent }, 
    { path: 'VendDashbrd', component: VendDashboardComponent },
    { path: 'VendInitGrid', component: VendInitGridComponent },
    { path: 'VendMtrlGrid', component: VendMtrlGridComponent },
    { path: 'VendFinalGrid', component: VendFinalGridComponent },
    { path: 'VendCmpltGrid', component: VendCmpltGridComponent },
    { path: 'atc', component: EmpGridComponent },
    { path: 'btc', component: EmpGridComponent},
    
    
    
];
