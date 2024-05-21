import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Vista1Component } from './vista1/vista1.component';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';


const routes: Routes = [
/*{
  path:"inicio", component: InicioComponent
},
{
  path:"galeria", component: Vista1Component
},*/

//ruta por defecto en la inicializacion
{
  path:"",component: InicioComponent
},
//ruta que nos vincula el inicio y todo su contenido
//loadchildren: indica que habrá una ruta hija
//.then: función asincronica tipo PROMESA 
{
  path:"", loadChildren: ()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},
{
  path:"", loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
},
{
  path:"", loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
}
//


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
