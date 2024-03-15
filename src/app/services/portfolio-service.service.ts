import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {
  private url=environment.baseUrl;

  constructor(
    private httpClient:HttpClient) { }

    

  public get(date:Date): Observable<any> {
    console.log("api work from front")
    return this.httpClient.post(this.url + '/test/',date);
  }

}
