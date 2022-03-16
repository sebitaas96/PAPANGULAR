import { Persona } from "./persona";

export class Pais {
    id:number;
    nombre:string;
    residentes:Array<Persona>;
    nativos:Array<Persona>;

    constructor(id:number , nombre:string){
        this.id = id;
        this.nombre = nombre;
        this.residentes = [];
        this.nativos = [];
    }
}
