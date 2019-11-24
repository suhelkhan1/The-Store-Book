import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public APIURL = environment.APP.BASE_URL;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    public http: HttpClient,
  ) { }

  get(url) {
    return this.http.get(url, this.httpOptions);
  }

  post(url, data) {
    return this.http.post(url, JSON.stringify(data), this.httpOptions);
  }

  put(url, data) {
    return this.http.put(url, JSON.stringify(data), this.httpOptions);
  }

  delete(url) {
    return this.http.delete(url, this.httpOptions);
  }
}
