import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

  URL: string;
  headers: HttpHeaders;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.URL = 'http://35.231.76.105:8080/api';

    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

  }

  retrive(id: string){
    return this.http.get(
      this.URL + '/' + id, {headers: this.headers}
    );
  }

  create(body: any){
    
    return this.http.post(
      this.URL + '/', body, {headers: this.headers}
    );
  }

  update(id: string, body: any){
    return this.http.put(
      this.URL + '/' + id, body, {headers: this.headers}
    );
  }

  delete(id:string){
    return this.http.delete(
      this.URL + '/' + id, {headers: this.headers}
    )
  }

}
