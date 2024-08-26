import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-accesorios',
  templateUrl: './card-accesorios.component.html',
  styleUrls: ['./card-accesorios.component.css']
})
export class CardAccesoriosComponent {
  //coleccion de todos los productos d eforma local
  coleccionProductos: Producto[] = [];

  //coleccion de productos de una sola categoria
  coleccionAccesorios: Producto[] = [];

  //variable para seleccionar productos específicos
  productoSeleccionado!: Producto;

  //varibale para manejar el estado del modla
  modalVisible: boolean = false;

  //patentamos de forma local el servicio para acceder en él
  constructor(public servicioCrud: CrudService) { }

  //inicializa al momento que renderiza el componente
  ngOnIniti(): void {
    //accedemos a metodo obtenerProducto y nos subscribimos a los cambios
    //recibimos notificacion ante modificaciones
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      //mostrará la coleccion de esa categoria hasta el momento
      this.mostrarProductoAccesorio();
    })
  }

  //funcion para filtrar los productos de tipo "accesorios"
  mostrarProductoAccesorio() {
    //iteramos coleccion de productos con un forEach
    this.coleccionProductos.forEach(producto => {
      // si es d etipo "accesorio" -> condicional
      if (producto.categoria === "accesorios") {
        //lo sube/guarda en la coleccion de productos tipo "accesorio"
        this.coleccionAccesorios.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;              
  }


}
