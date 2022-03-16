import { Component, OnInit } from '@angular/core';
import { Aficion } from '../models/aficion';
import { ActivatedRoute, Router } from '@angular/router';
import { AficionService } from '../service/aficion.service';


@Component({
  selector: 'app-aficion-c',
  templateUrl: './aficion-c.component.html',
  styleUrls: ['./aficion-c.component.css']
})
export class AficionCComponent implements OnInit {

  aficion:Aficion;

  constructor(private route: ActivatedRoute, private router: Router,  private aficionService: AficionService) {
    this.aficion = new Aficion(0 , "");
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.aficionService.save(this.aficion).subscribe(result => this.gotoAficionList());
  }

  gotoAficionList(){
    this.router.navigate(['/aficion']);
  }

}
