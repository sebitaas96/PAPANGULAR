import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personaUrl :string;

  constructor(private http:HttpClient){
    this.personaUrl = 'http://localhost:8080/persona';
  }

  public findAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaUrl);
  }

  public save(persona:Persona){
    return this.http.post<Persona>(this.personaUrl , persona);
  }
}
