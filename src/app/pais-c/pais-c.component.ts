import { Component, OnInit } from '@angular/core';
import { Pais } from '../models/pais';
import { PaisServiceService } from '../service/pais-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pais-c',
  templateUrl: './pais-c.component.html',
  styleUrls: ['./pais-c.component.css']
})
export class PaisCComponent implements OnInit {

  pais:Pais;
  public nombre:string;

  constructor( private route: ActivatedRoute, private router: Router,  private paisService: PaisServiceService)  {
      this.nombre="";
      this.pais = new Pais(this.nombre);
  }

  onSubmit(){
    console.log("lego aqui");
    this.paisService.save(this.pais).subscribe(result => this.gotoPaisList());
  }

  ngOnInit(): void {
  }

  gotoPaisList(){
    this.router.navigate(['/pais']);
  }

}
