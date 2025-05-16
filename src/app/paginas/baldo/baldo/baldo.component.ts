import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-baldo',
  imports: [CommonModule, RouterModule],
  templateUrl: './baldo.component.html',
  styleUrl: './baldo.component.css'
})
export class BaldoComponent {

  Productos: Producto[] = [

    { 
      id:1,
      Nombre: "yerba",
      descripcion: "yerba mate BALDO X 1 kilo",
      precio: 100,
      imagen:"https://canarias.com.uy/wp-content/uploads/2018/09/baldo.jpg", 
      disponibilidad: true,
      cantidad:50,
    },
    

  ]
  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService){}
  

  //METODO PARA AGREGAR UN PRODUCTO AL CARRITO
  agregar(producto: Producto){
    this.carritoService.agregarAlCarrito(producto)
    alert('Producto agregado al carrito')//muestra el 
  }
  
  agregarFavoritos(producto: Producto){
    this.favoritosService.agregarAFavoritos(producto)
    alert('Producto agregado a favoritos')//muestra el 
  }
  
  
  usuario = {
    nombre: 'Martin',
    activo: true
  }
}
