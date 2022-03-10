import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../models/pais';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private paisUrl: string;

  constructor(private http: HttpClient) {
    this.paisUrl = 'http://localhost:8080/pais';
  }

  public findAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.paisUrl);
  }

  public findById(id:number){
    return this.http.get<Pais>('${this.paisUrl}/${id}');
  }

  public save(pais: Pais) {
    console.log(pais);
    return this.http.post<Pais>(this.paisUrl, pais);
  }
}
