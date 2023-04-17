import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamento-ts',
  templateUrl: './fundamento-ts.component.html',
  styleUrls: ['./fundamento-ts.component.css']
})


export class FundamentoTSComponent {

   // ENUMERACIONES
      enumerar(){
        enum marcasCoches {
          Honda,
          Toyota,
          Subaru,
        }
       
        const marcas = document.createElement("ul");
        for(let p in marcasCoches){
          if(isNaN(Number(p))){
            const elemento=document.createElement("li");
            elemento.innerText=p;
            marcas.appendChild(elemento)
          }
        }
       document.body.appendChild(marcas);
      }
      
  // ASIGNACION DE DETERMINADOS VALORES A LAS VARIABLES

      valor1: number=3|5|7;
      resultado:string=""
      
      enviar(){
        // Validacion de números
        if(this.valor1==3 ||(this.valor1==5)||(this.valor1==7)){
          this.resultado="Número válido";
        }
        else{
          this.resultado="Número no válido";
        }
    }

  ngOnInit() {

    // ARRAYS
    
        // Array de strings
        let ciudades=['Madrid','Barcelona','Sevilla','Valencia','Cantabria','Santiago'];

        // Array numerico
        let numeros=[1,2,3,4,5,6,7,8,9,10]

        // Array mixto
        let mixto=['Verde',2,'Azul',4,false]

        // Join: devuelve un string separado por el paramtero pasado
        console.log('Join: '+ciudades.join('%'));

        // indexOf: devuelve la posicion en el array que ocupa el valor indicado
        console.log('Index: '+numeros.indexOf(3))

        // Concat: devuelve el array añadiendo los valores de otro array que pasamos por parámetro
        console.log('Concat: '+mixto.concat(['Morado',15,true]))

        // Push: añade un valor nuevo al final del array
        console.log('Push: '+ciudades.concat('Zaragoza'))

        // Pop: devuelce un string con el elemento borraado (elimina el último)
        console.log('Pop: '+numeros.pop())

        // Length: devuelve el número de elementos que compone el array
        console.log('Length: '+ciudades.length)
}
  
}
