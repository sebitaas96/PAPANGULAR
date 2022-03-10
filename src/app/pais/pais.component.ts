import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../models/pais';
import { PaisServiceService } from '../service/pais-service.service';

@Component({
  selector: 'pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  paises :Pais[];

  constructor(private router:Router , private paisService: PaisServiceService) { 
    this.paises = [];
  }

  ngOnInit(): void {
    this.paisService.findAll().subscribe(data => {
      this.paises = data;
    });
  }

  /*Redirigir con  parametros*/
  crearPais():void{
    //Con envio de parametros
      // this.router.navigate(['/pais-c'] ,  { queryParams:{ name: "sebas" }});
    //Sin envio de parametros
   this.router.navigate(['/pais-c']);
  }


}
