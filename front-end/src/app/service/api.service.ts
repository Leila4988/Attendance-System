import { Headers } from '@angular/http';

export class ApiService {
  //获取url
  getUrl(): string {
    return 'http://localhost:8080/as';
  }
  //获取header
  getHeaders(): Headers {
    return new Headers({'Content-Type':'application/json'});
  }
  constructor() { }
}
