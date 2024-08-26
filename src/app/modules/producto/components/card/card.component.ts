import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Definimos colección d eproductos locales
  coleccionProductos: Producto[] = [];

  //Variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  //Variable local para manejar estado de un modal
  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
  
  //funcion para mostrar mas informacion de los productos
  mostrarVer(info: Producto){
    //cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;

    //guardo en variable seleccionado la informacion de producto elegido
    this.productoSeleccionado = info;
  }
}
