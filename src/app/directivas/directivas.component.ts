import { Component, ViewChild, TemplateRef,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

    nota:number=0;
    ciudades=["Madrid","Barcelona","Sevilla"];
    valor1:number=0;
    valor2:number=0;
    operacion:string="";
    saludos=["Hola","Hi","Ni hao"]

    calcular(){
      this.operacion=this.operacion;
    }
}
