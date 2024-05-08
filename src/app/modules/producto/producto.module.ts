import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVODE RUTAS DEL MODULO PRODUCTO
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS DE SECCIONES DE PRODUCTOS
import { ProductoComponent } from './pages/producto/producto.component';
import { PapeleriaComponent } from './pages/papeleria/papeleria.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductoComponent,
    PapeleriaComponent,
    AccesoriosComponent,
    IndumentariaComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    PapeleriaComponent,
    AccesoriosComponent,
    IndumentariaComponent
  ]
})
export class ProductoModule { }
