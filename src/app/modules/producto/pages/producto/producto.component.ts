import { Component } from '@angular/core';

import { Producto } from 'src/app/models/producto';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  //strimgue modificara el valor de "input en el componnete hijo"
  product: string = '';
  //Coleccion de productos añadidos a la lista
  productosCarrusel: Producto[] = [];

  productoAnadido(producto: Producto) {
    //reemplazamos el valor de product
    this.product = `${producto.nombre} : $${producto.precio}`;

    try {
      //agregamos la infor recibida por el parametro de la funcion a la coleccion de carrusel
      this.productosCarrusel.push(producto);

      Swal.fire({
        title: '¡En hora buena!',
        text: 'ha añadido el producto con exito',
        icon: 'info'
      })
    }
    catch (error) {
      Swal.fire({
        title: 'Oh no!',
        text: 'ha ocurrido un error\n'+error,
        icon: 'error'
      })
    }


  }

}
