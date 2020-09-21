import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private httpClient: HttpClient) { }
API_KEY = '0a4cf304be36471bbd5552b081157660';

public getNews(){
  return this.httpClient.get(`http://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.API_KEY}`);
}
}
