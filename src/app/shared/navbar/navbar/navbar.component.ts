import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../../servicios/carrito.service';
import { Producto } from '../../../modelos/producto.model';

import { AuthService } from '../../../servicios/auth.service';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;
  cantidadFavoritos: number = 0;
  usuario: any = null;
  constructor(protected carritoService: CarritoService, private favoritosService: FavoritoService, public authService: AuthService) {
  }

  ngOnInit(): void {

    this.usuario = this.authService.getUsuario();

    if (this.authService.isLoggedIn()) {
      this.carritoService.cargarCarrito();
    }
    //escucha los cambios en el carrito pra actualizar la cantidad total de prductos

    this.carritoService.carrito$.subscribe((productos: Producto[]) => {
      this.cantidadProductos = productos.length; // aquí simplemente cuentas los productos
    })

    if (this.authService.loginEvent) {
      this.authService.loginEvent.subscribe(() => {
        this.usuario = this.authService.getUsuario();
        this.carritoService.cargarCarrito();
      });
    }


  }
  logout() {
    this.authService.logout();
    this.usuario = null;
    this.cantidadProductos = 0;
  }

  onCarritoClick() {
    console.log('Carrito clicked');
  }

  onFavoritosClick() {
    console.log('Favoritos clicked');
  }
}