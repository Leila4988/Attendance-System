import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { User } from "../domain/as"
import { ApiService } from './api.service';

@Injectable()
export class LoginService {
  private api_url;
  private headers;

  constructor(private http: Http, private apiService: ApiService) {
        this.api_url = apiService.getUrl() + '/loggin';
        this.headers = apiService.getHeaders();
    }

  //获取用户信息
  getUsers(): Promise<User[]> {
      const url = `${this.api_url}`;
      return this.http.get(url, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as User[])
          .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}
  
}
