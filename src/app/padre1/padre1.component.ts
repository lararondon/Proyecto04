import { Component } from '@angular/core';

@Component({
  selector: 'app-padre1',
  templateUrl: './padre1.component.html',
  styleUrls: ['./padre1.component.css']
})
export class Padre1Component {

  nombre:string="";
  apellidos:string="";
  cedula:number=0;
  doctor:any=[]

 agregarDoctor(){
  let doctor: any={
    nombre:this.nombre,
    apellidos:this.apellidos,
    cedula:this.cedula
  }
  this.doctor.push(doctor)
 }

}
