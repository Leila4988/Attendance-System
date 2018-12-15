import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { Handle } from "../domain/ha"
import { ApiService } from './api.service';

@Injectable()
export class ToHandleService {
  private api_url;
  private headers;

  constructor(private http: Http, private apiService: ApiService) {
        this.api_url = apiService.getUrl() + '/handles';
        this.headers = apiService.getHeaders();
    }

  //使用post上传请假单，如果请假失败，则获得失败的代码及详细信息
  putHandle(handle: Handle, id: string) {
      const url = `${this.api_url}/` + id;
      return this.http.put(url, JSON.stringify(handle) , {headers: this.headers})
          .toPromise()
          .then()
          .catch(this.handleError);
  }

  //使用get下载尚未处理的审批
  //获取用户信息
  getHandles(): Promise<Handle[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Handle[])
        .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}
  
}
