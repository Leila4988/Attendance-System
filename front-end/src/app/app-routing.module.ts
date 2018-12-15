import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LogInComponent } from './components/login/login.component';
import { LeaveComponent } from './components/leave/leave.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProcessComponent } from './components/process/process.component';
import { HandleComponent } from './components/handle/handle.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'login',component: LogInComponent },
    { path: 'user',component: MenuComponent },
    { path: 'leave',component: LeaveComponent },
    { path: 'state',component: ProcessComponent },
    { path: 'handle',component: HandleComponent }
  ];
