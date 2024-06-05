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

  public coleccionusuariosLocales: Usuario[];

  constructor() {
    this.coleccionusuariosLocales = [
      {
        uid: '',
        nombre: 'agostina',
        apellido: 'ovando',
        email: 'agosovando@gmail.com',
        rol: 'visitante',
        password: '123456'
      },
      {
        uid: '',
        nombre: 'lucia',
        apellido: 'perez',
        email: 'luciaperez@gmail.com',
        rol: 'vis',
        password: 'abcd12'
      },
      {
        uid: '',
        nombre: 'luciano',
        apellido: 'franco',
        email: 'lucianofranco@gmail.com',
        rol: 'admin',
        password: 'abdce34'
      },
    ]
  }

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  iniciarsesion() {
    const credenciales = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = '',
    }

    //repetitiva para recorrer todos los usuarios locales
    for(let i = 0; i<this.coleccionusuariosLocales.length; i++){
      //usuarioLocal corresponde 
      const usuariolocal= this.coleccionusuariosLocales[i];

      if(usuariolocal.nombre===credenciales.nombre&&usuariolocal.apellido===credenciales.apellido&&usuariolocal.email===
        credenciales.email&&usuariolocal.rol===credenciales.rol&&usuariolocal.password===credenciales.password){
          //notificamos al usuario que pudo ingresar
        alert("ingresaste con exito");
        //paramos a la funcion
        break;
      }
      else{
        alert("Ocurrio un error al iniciar sesion");
        break;
      }
    }
    this.limpiarInputs();
  }
  limpiarInputs(){
    /*
    en constante "inputs" llamamos a los atributos y lo inicializamos como vaios (string= '',number=0)
    */
   const inputs={
    uid: this.usuarios.uid='',
      nombre: this.usuarios.nombre='',
      apellido: this.usuarios.apellido='',
      email: this.usuarios.email='',
      rol: this.usuarios.rol='',
      password: this.usuarios.password='',
   }
  }
}
