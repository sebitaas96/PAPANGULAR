import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../models/pais';
import { Persona } from '../models/persona';
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

  public findById(id:number):Observable<Pais>{
    return this.http.get<Pais>(this.paisUrl+ id);
  }

  public findResidentes(id:number):Observable<Persona[]>{
    return this.http.get<Persona[]>(this.paisUrl+'/'+id +'/nativos');
  }

  public findNativos(id:number):Observable<Persona[]>{
    return this.http.get<Persona[]>(this.paisUrl+'/'+id +'/residentes');
  }


  public save(pais: Pais) {
    return this.http.post<Pais>(this.paisUrl, pais);
  }
}
