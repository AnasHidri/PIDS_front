import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Allocation } from '../model/allocation';

@Injectable({
  providedIn: 'root'
})
export class AllocationServiceService {
  private url=environment.baseUrl;

  constructor(
    private httpClient:HttpClient
  ) { }

  public getAllocation(): Observable<any> {

    return this.httpClient.get<Allocation[]>(this.url + '/api/allocations/');
  }
  
}
