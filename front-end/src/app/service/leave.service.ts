import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Leave } from "../domain/le"
import { ApiService } from './api.service';

@Injectable()
export class LeaveService {
  private api_url;
  private headers;

  constructor(private http: Http, private apiService: ApiService) {
        this.api_url = apiService.getUrl() + '/leave/add';
        this.headers = apiService.getHeaders();
    }

  //使用post上传请假单，如果请假失败，则获得失败的代码及详细信息
  postLeave(leave: Leave): Promise<Leave> {
      const url = `${this.api_url}`;
      return this.http.post(url, JSON.stringify(leave) , {headers: this.headers})
          .toPromise()
          .then()
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      alert("剩余年假数不够，无法请假！");
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}
  
}
