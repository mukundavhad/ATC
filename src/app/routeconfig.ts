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

export const appRoutes: Routes = [
    { path: 'Login', component: LoginComponent},
    { path: 'Home',      component: HomeComponent },
    { path: 'Dashboard',      component: DashboardComponent },
    { path: 'ServManage',      component: ServManageComponent },
    { path: 'VendManage',      component: VendManageComponent },
    { path:'emp-grid',component:EmpGridComponent},
    { path:'header',component:HeaderComponent},
    { path: '',      component: LoginComponent },

];
