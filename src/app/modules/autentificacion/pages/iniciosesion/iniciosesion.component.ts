import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  //input de contraseña
  hide = true;

  public perfil: Usuario[];

  constructor() {
    this.perfil = [
      {
        uid: '',
        nombre: 'agostina',
        apellido: 'ovando',
        email: 'lunaovando@gmail.com',
        rol: 'administrador',
        password: '12345'
      }
    ]
  }

  perfiles: Usuario = {
    uid: '',//--> inicializamos con comillas vacias porque es string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  coleccionPerfiles: Usuario[] = [];

  comparacion() {
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.perfiles.uid,
      nombre: this.perfiles.nombre,
      apellido: this.perfiles.apellido,
      email: this.perfiles.email,
      rol: this.perfiles.rol,
      password: this.perfiles.password,

    }
    //enviamos la nueva informacion como un nuevo objeto a la collecion de usuarios
  this.coleccionPerfiles.push(credenciales)

  //mostramos credenciales por consola
  console.log(credenciales);
  console.log(this.coleccionPerfiles);
  }

  
}
