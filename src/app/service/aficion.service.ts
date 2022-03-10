import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Aficion } from '../models/aficion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AficionService {

  private aficionUrl: string;

  constructor(private http: HttpClient) {
    this.aficionUrl = 'http://localhost:8080/aficion';
  }

  public findAll(): Observable<Aficion[]> {
    return this.http.get<Aficion[]>(this.aficionUrl);
  }

  public save(aficion: Aficion) {
    return this.http.post<Aficion>(this.aficionUrl, aficion);
  }
}
