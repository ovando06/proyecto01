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
}
//


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
