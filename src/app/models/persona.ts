import { Pais } from "./pais";

export class Persona {
    id:string;
    nombre:string;
    nacimiento:Date;
    password:string;
    nace: Pais ;
    vive:Pais ;

    constructor(id:string,  nombre:string ,password:string ,  nacimiento:Date , nace:Pais , vive:Pais){
        this.id = id;
        this.nombre = nombre;
        this.nacimiento = nacimiento;
        this.password = password;
        this.nace = nace;
        this.vive = vive;
    }

}
