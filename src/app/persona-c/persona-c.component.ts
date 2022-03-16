import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisServiceService } from '../service/pais-service.service';
import { AficionService } from '../service/aficion.service';
import { Pais } from '../models/pais';
import { Aficion } from '../models/aficion';

@Component({
  selector: 'persona-c',
  templateUrl: './persona-c.component.html',
  styleUrls: ['./persona-c.component.css']
})
export class PersonaCComponent implements OnInit {
  
  persona:Persona;
  paises :Pais[];
  aficiones : Aficion[];

  constructor(private route:ActivatedRoute , private router:Router , private personaService: PersonaService 
    , private paisService: PaisServiceService , private aficionService:AficionService) {
    this.persona = new Persona(0, '' , '', new Date(),new Pais(0,'') ,new Pais(0,''));
    this.paises = [];
    this.aficiones = [];
   }

  ngOnInit(): void {
    this.paisService.findAll().subscribe(data => {
      this.paises = data;
    });

    this.aficionService.findAll().subscribe(data =>{
      this.aficiones = data;
    })
  }

  onSubmit(){
    this.personaService.save(this.persona).subscribe(result => this.gotoPersonaList());
  }

  gotoPersonaList(){
    this.router.navigate(['/persona']);
  }

  addGusta(e:any){
    let aficion:Aficion = e.target.value;
    console.log(aficion.id);
    let idx = this.persona.aficionesGusta.indexOf(aficion) 
    if(idx == null){
      this.persona.aficionesGusta.push(aficion);
    }
    else{
      this.persona.aficionesGusta.splice(idx , 0);
    } 
    console.log(this.persona.aficionesGusta);
  }

  addDisgusta(e:any){
    let aficion:Aficion = e.target.value;
    let idx = this.persona.aficionesDisgusta.indexOf(aficion) 
    if(idx == null){
      this.persona.aficionesDisgusta.push(aficion);
    }
    else{
      this.persona.aficionesDisgusta.splice(idx , 0);
    } 
    console.log(this.persona.aficionesDisgusta);
  }
}
