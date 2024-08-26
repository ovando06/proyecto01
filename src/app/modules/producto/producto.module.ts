import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ARCHIVODE RUTAS DEL MODULO PRODUCTO
import { ProductoRoutingModule } from './producto-routing.module';

//VISTAS DE SECCIONES DE PRODUCTOS
import { ProductoComponent } from './pages/producto/producto.component';
import { PapeleriaComponent } from './pages/papeleria/papeleria.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

//COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CardAccesoriosComponent } from './components/card-accesorios/card-accesorios.component';





@NgModule({
  declarations: [
    ProductoComponent,
    PapeleriaComponent,
    AccesoriosComponent,
    IndumentariaComponent,
    CardComponent,
    CardAccesoriosComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    PapeleriaComponent,
    AccesoriosComponent,
    IndumentariaComponent,
    CardComponent,
    CardAccesoriosComponent,
  ]
})
export class ProductoModule { }
