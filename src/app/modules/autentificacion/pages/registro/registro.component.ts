import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de contraseña
  hide = true;

  //importar interface de usuario -> inicializar
  usuarios: Usuario = {
    uid: '',//--> inicializamos con comillas vacias porque es string
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password:'',
  }
  
  //creamos coleccion de usuarios, tipo 'usuario' para arrays
  coleccionUsuario: Usuario[]=[];

  //funcion para el registro de nuevos usuarios
  registrar(){
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password,
      
    }
    
    //enviamos la nueva informacion como un nuevo objeto a la collecion de usuarios
    this.coleccionUsuario.push(credenciales)

    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuario);
  }

}
