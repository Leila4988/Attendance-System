import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LogInComponent } from './components/login/login.component';
import { EmployeeMenuComponent } from './components/employee-menu/employee-menu.component';
import { ManagerMenuComponent } from './components/manager-menu/manager-menu.component';
import { ProcessComponent } from './components/process/process.component';
import { HandleComponent } from './components/handle/handle.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login',component: LogInComponent },
    { path: 'employee/:id',component: EmployeeMenuComponent },
    { path: 'manager/:id',component: ManagerMenuComponent },
    { path: 'state',component: ProcessComponent },
    { path: 'handle',component: HandleComponent }
  ];
