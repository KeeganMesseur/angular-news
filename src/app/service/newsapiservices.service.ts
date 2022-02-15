import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=5b3c46851cdb4ea5ad70895ca2f55f5e"
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }
}
