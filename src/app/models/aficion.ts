import { Persona } from "./persona";

export class Aficion {
    id:number;
    nombre:string;
    personasGustan:Array<Persona>;
    personasDisgustan:Array<Persona>;

    constructor(id:number , nombre:string){
        this.id = id;
        this.nombre = nombre;
        this.personasGustan = [];
        this.personasDisgustan = [];
    }
    
}
