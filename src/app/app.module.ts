import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
//引入服务
import { LoginService } from './service/login.service';
import { ApiService } from './service/api.service'
import { InquireService } from './service/inquire.service'
import { LeaveService } from './service/leave.service'
import { ToHandleService } from './service/to-handle.service';

//为了使用[(ngModel)]，导入
import { FormsModule } from '@angular/forms';

//引入路由
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing.module';//引入在根路由组件里面定义的路由配置

//注册了HTTP服务
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { LeaveComponent } from './components/leave/leave.component';
import { ProcessComponent } from './components/process/process.component';
import { HandleComponent } from './components/handle/handle.component';
import { ManagerMenuComponent } from './components/manager-menu/manager-menu.component';
import { EmployeeMenuComponent } from './components/employee-menu/employee-menu.component';
import { AlreadyCheckedComponent } from './components/already-checked/already-checked.component';
import { LeaveLogComponent } from './components/leave-log/leave-log.component';
import { DepartmentLogComponent } from './components/department-log/department-log.component';

let rootRouterMoudle: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    //引入了组件
    LogInComponent,
    TestComponent,
    LeaveComponent,
    ProcessComponent,
    HandleComponent,
    ManagerMenuComponent,
    EmployeeMenuComponent,
    AlreadyCheckedComponent,
    LeaveLogComponent,
    DepartmentLogComponent
  ],
  //注册了HTTP服务
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRouterMoudle
  ],
  //注册服务
  providers: [LoginService, ApiService, LeaveService, InquireService, ToHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
