import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { PapeleriaComponent } from './pages/papeleria/papeleria.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"papeleria",component:PapeleriaComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"accesorios",component:AccesoriosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
