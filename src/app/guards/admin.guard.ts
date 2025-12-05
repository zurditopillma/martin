import { Injectable } from "@angular/core";

//iporta canActivate (interfaz para proteger ruta) y Router (para direccionar)
import { CanActivate,Router } from "@angular/router";

//importa el servicio de autenticacion que contiene la logica para verificarroles de usuario
import { AuthService } from "../servicios/auth.service";

//declara la clase como inyectable y disponible en toda la aplicacion
@Injectable({providedIn:'root'})
export class AdminGuard implements CanActivate{

    //inyeccion de dependencia:
    // - AutoService: para comprobar si el usuario tiene rol de administrador
    // - Router: Para redirigir al usuario si no tiene permiso
    constructor(private authService: AuthService, private router :Router){}
        //metodo obligatorio de la interfaz canActivate, que decide si se puede acceder a una ruta
        canActivate(): boolean {
            //si el usuario tiene rol de administrador, se permite el acceso
            if(this.authService.esAdmin()){
                return true
            }else
                alert('Acceso denegado,solo administratorespueden entrar aqui')

                this.router.navigate(['/inicio'])

                return false
        }
      
}