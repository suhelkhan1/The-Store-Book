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
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.get(apiUrl, this.httpOptions);
  }

  getAll(url) {
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.get(apiUrl, this.httpOptions);
  }

  post(url, data) {
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.post(apiUrl, JSON.stringify(data), this.httpOptions);
  }

  put(url, data) {
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.put(apiUrl, JSON.stringify(data), this.httpOptions);
  }

  patch(url, data) {
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.put(apiUrl, JSON.stringify(data), this.httpOptions);
  }

  delete(url) {
    const apiUrl = environment.APP.BASE_URL + url;
    return this.http.delete(apiUrl, this.httpOptions);
  }
}
