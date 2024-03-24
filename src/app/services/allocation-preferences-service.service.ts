import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllocationPreference } from '../model/allocation-preference';

@Injectable({
  providedIn: 'root'
})
export class AllocationPreferencesServiceService {
  private url=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  public getAllocationPreferences(): Observable<any> {
    return this.httpClient.get<AllocationPreference[]>(this.url + '/api/allocationpreferences/');
  }


}
