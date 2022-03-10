import { Component, OnInit } from '@angular/core';
import { Aficion } from '../models/aficion';
import { AficionService } from '../service/aficion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'aficion',
  templateUrl: './aficion.component.html',
  styleUrls: ['./aficion.component.css']
})
export class AficionComponent implements OnInit {
  aficiones:Aficion[];

  constructor(private router:Router , private aficionService: AficionService) { 
    this.aficiones = [];
  }

  ngOnInit(): void {
    this.aficionService.findAll().subscribe(data =>{
      this.aficiones = data;
    })
  }

  crearAficion(){
    this.router.navigate(['/aficion-c']);
  }

}
