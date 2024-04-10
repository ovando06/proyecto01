import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Vista1Component } from './vista1/vista1.component';

const routes: Routes = [
{
  path:"inicio", component: InicioComponent
},
{
  path:"galeria", component: Vista1Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
