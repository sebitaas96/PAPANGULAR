import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personas:Persona[];

  constructor(private router:Router , private personaService:PersonaService) {
    this.personas =[];
   }

  ngOnInit(): void {
    this.personaService.findAll().subscribe(data =>{
      this.personas = data;
    });
  }

  crearPersona():void{
    this.router.navigate(['/persona-c']);
  }
}
