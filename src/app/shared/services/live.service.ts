import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Live } from '../models/live.model';

@Injectable({
  providedIn: 'root',
})
export class LiveService {
  public apiUrl = 'http://localhost:3333/lives';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getLivesWithFlags(flag: string): Observable<Array<Live>> {
    return this.httpClient.get<Array<Live>>(`${this.apiUrl}?disponible=${flag}`);
  }

  public createLive(live: Live): Observable<Live> {
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
