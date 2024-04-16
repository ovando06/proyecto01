import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Vista1Component } from './vista1/vista1.component';

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
{
  path:"", loadChildren: ()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
}
//


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
