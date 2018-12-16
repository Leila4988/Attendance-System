import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Process } from "../domain/pr"
import { ApiService } from './api.service';
import { Handle } from "../domain/ha"
import { Annual } from "../domain/an";

@Injectable()
export class InquireService {
  //定义查询三类信息：审批状态、自己过去的请假单、部门考勤表的url
  private state_url;
  private leaveinfo_url;
  private departmentinfo_url;
  private annual_url;
  private headers;

  constructor(private http: Http, private apiService: ApiService) {
        this.state_url = apiService.getUrl() + '/states';
        this.leaveinfo_url = apiService.getUrl() + '/users';
        this.departmentinfo_url= apiService.getUrl() + '/users';
        this.headers = apiService.getHeaders();
    }

  //使用用户id查询本部门的考勤详情以及当前进度
  inquireState(user_id: string): Promise<Process> {
      const url = `${this.state_url}/` + user_id;
      return this.http.get(url, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Process)
          .catch(this.handleError);
  }

  inquireLeaveInfo(id: string): Promise<Handle[]> {
    const url = `${this.leaveinfo_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Handle[])
        .catch(this.handleError);
  }

  inquireDepartmentInfo(id: string): Promise<Handle[]> {
    const url = `${this.departmentinfo_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Handle[])
        .catch(this.handleError);
  }

  inquireAnnualInfo(id: string): Promise<Annual> {
    const url = `${this.annual_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Annual)
        .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}
  
}
