import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  /*Redirigir con  parametros*/
  crearPais():void{
    //Con envio de parametros
      // this.router.navigate(['/pais-c'] ,  { queryParams:{ name: "sebas" }});
    //Sin envio de parametros
   this.router.navigate(['/pais-c']);
  }


}
