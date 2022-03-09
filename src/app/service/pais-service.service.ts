import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../models/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/pais';
  }

  public findAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.usersUrl);
  }

  public save(pais: Pais) {
    return this.http.post<Pais>(this.usersUrl, pais);
  }
}
