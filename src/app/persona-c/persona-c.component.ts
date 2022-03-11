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
  personaNaceId:number;
  personaViveId:number;

  constructor(private route:ActivatedRoute , private router:Router , private personaService: PersonaService 
    , private paisService: PaisServiceService , private aficionService:AficionService) {
    this.persona = new Persona('', '' , '', new Date(),new Pais('','') ,new Pais('',''));
    this.paises = [];
    this.aficiones = [];
    this.personaNaceId = 0;
    this.personaViveId = 0;
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
     this.paisService.findById(this.personaNaceId).subscribe(data=>{
       this.persona.nace = data;
     });
     this.paisService.findById(this.personaViveId).subscribe(data=>{
       this.persona.vive = data;
     });

    this.personaService.save(this.persona).subscribe(result => this.gotoPersonaList());
  }

  gotoPersonaList(){
    this.router.navigate(['/persona']);
  }

}
