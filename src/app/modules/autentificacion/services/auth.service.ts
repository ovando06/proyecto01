import { Injectable } from '@angular/core';
//servicio en la nube de autentificacion de firebase
import { AngularFireAuth} from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
// referenciar auth de firebase en el servicio

  constructor(public auth: AngularFireAuth) { }

  //FUNCION PARA REGISTRO
  registrar(email:string, password:string){
    //retorna el valor que es creado con el metodo "createEmail..."
     return this.auth.createUserWithEmailAndPassword(email, password);

  }
  //FUNCION PARA INICIAR SESION
  iniciarsesion(email:string, password:string){
    //validar la informaicon del usuario -> saber si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email,password);
  }


  //FUNCION PARA CERRAR SESION
  cerrarsesion(){
    //devuelve una promesa vacia -> quita token
    return this.auth.signOut();
  }

  //FUNCION PARA TOMAR EL UID
}
