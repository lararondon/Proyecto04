import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {

  nombre:string="";
  apellidos:string="";
  dni:string="";
  telefono:string="";
  direccion:string="";
  email:string="";

  @Output() enviarPaciente = new EventEmitter<any>();

  agregarPaciente(){
    let paciente:any={
      nombre:this.nombre,
      apellidos:this.apellidos,
      dni:this.dni,
      telefono:this.telefono,
      direccion:this.direccion,
      email:this.email
    }

    this.enviarPaciente.emit(paciente);

  }

  
}
