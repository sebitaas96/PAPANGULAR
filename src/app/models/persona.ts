import { Aficion } from "./aficion";
import { Pais } from "./pais";

export class Persona {
    id:number;
    nombre:string;
    fNacimiento:Date;
    password:string;
    nace: Pais ;
    vive:Pais ;
    aficionesGusta:Array<Aficion>;
    aficionesDisgusta:Array<Aficion>;

    constructor(id:number,  nombre:string ,password:string ,  nacimiento:Date , nace:Pais , vive:Pais){
        this.id = id;
        this.nombre = nombre;
        this.fNacimiento = nacimiento;
        this.password = password;
        this.nace = nace;
        this.vive = vive;
        this.aficionesGusta = [];
        this.aficionesDisgusta = [];
    }

}
