import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fees } from '../model/fees';

@Injectable({
  providedIn: 'root'
})
export class FeesServiceService {
  private url=environment.baseUrl;

  constructor(
    private httpClient:HttpClient
  ) { }

  public getFeesById(id:string): Observable<any> {

    return this.httpClient.get<Fees>(this.url + '/api/fees/'+id);
  }
  public getFees(): Observable<any> {

    return this.httpClient.get<Fees[]>(this.url + '/api/fees/');
  }
}
