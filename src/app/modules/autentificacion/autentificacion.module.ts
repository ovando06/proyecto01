import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';

// VISTAS DE AUTENTIFICACION
import { RegistroComponent } from './pages/registro/registro.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';

//COMPONENTES DE MATERIAL
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//COMPONENTE ANGULAR
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    //ANGULAR
    FormsModule
  ],
  exports:[
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    //ANGULAR
    FormsModule
  ]
})
export class AutentificacionModule { }