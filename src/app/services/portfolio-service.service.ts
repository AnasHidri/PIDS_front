import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Allocation } from '../model/allocation';
import { Portfolio } from '../model/portfolio';
import { PortfolioSettings } from '../model/portfolio-settings';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {
  private url=environment.baseUrl;

  constructor(
    private httpClient:HttpClient) { }

    

  public getAllocation(): Observable<any> {
    console.log("api work from front")
    return this.httpClient.get<Allocation>(this.url + '/api/allocations/');
  }

  public get(): Observable<any> {
    console.log("api work from front")
    return this.httpClient.get<PortfolioSettings>(this.url + '/api/portfolio/');
  }

}
