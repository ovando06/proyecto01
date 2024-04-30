import { Component } from '@angular/core';
//IMPORTAMOS INTERFAZ
import { Serie } from 'src/app/models/serie';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 //PROPIEDAD PÚBLICO (TIPO ARREGLO)
 public info: Serie[];

 //INICIALIZAR LA PROPIEDAD INFO
 constructor(){
 
 //DECLARAR LOS OBJETOS QUE QUEREMOS UTILIZAR  
 this.info = [
   {
     id: "",
     personaje:"Dustin", 
     edad: 21,
     temporada: "3", 
     imagen:"https://www.americatv.com.pe/cinescape/wp-content/uploads/2020/01/305653.jpg", 
     alt: "Imagen de Dustin",
   },
   {
     id: "",
     personaje: "Once", 
     edad: 20,
     temporada:"4", 
     imagen: "https://www.formulatv.com/images/articulos/116000/116470_HaqF7UWH31PNsvJtm68iR4cz5ok9BgeLE-h2.jpg",
     alt: "Imagen de Once",
   },
   {
     id: "",
     personaje:"Will", 
     edad: 19,
     temporada:"4", 
     imagen: "https://assets.glamour.de/photos/650429b9cc75bc8dbef6edfb/2:3/w_1280,h_1920,c_limit/150923-Stranger-Things-stars.jpeg",
     alt: "Imagen de Will",
   }]
  }

}
