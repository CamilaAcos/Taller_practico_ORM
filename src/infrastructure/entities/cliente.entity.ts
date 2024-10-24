import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Clientes")
export class ClienteEntity{

    @PrimaryColumn()
    dni:string;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    clave: string;

    constructor (cliente:{dni:string; nombre:string; correo:string; clave: string}){
        this.dni = cliente?.dni;
        this.nombre = cliente?.nombre;
        this.correo = cliente?.correo;
        this.clave= cliente?.clave;
    }
}