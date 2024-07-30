import { Injectable } from '@angular/core';
//importamos interfaz
import { Producto } from 'src/app/models/producto';
//importamos angular firestore para ingresar a la BD
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos coleccion para los productos de la web
  private productoColecction: AngularFirestoreCollection<Producto>



  constructor(private database: AngularFirestore) {
    //
    this.productoColecction= database.collection('producto');
   }

   //crear productos
   crearProducto(producto: Producto){
    return new Promise(async(resolve,reject)=>{
      try{
        //Creamos numero identificativo para el producto en la Bd
        const idProducto = this.database.createId();
        //asignamos ID creado al atributo idProducto de la inhterfaz Producto
        producto.idProducto = idProducto;

        //
        const resultado = await this.productoColecction.doc(idProducto).set(producto);

        //
        resolve(resultado);
      }catch(error){
        //
        reject(error);
      }
    })
   }
   //obtener productos
   //editar productos
   //eliminar productos
}
