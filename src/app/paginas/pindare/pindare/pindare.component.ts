import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-pindare',
  imports: [CommonModule, RouterModule],
  templateUrl: './pindare.component.html',
  styleUrl: './pindare.component.css'
})
export class PindareComponent {

  Productos: Producto[] = [
  
      { 
        id:1,
        Nombre: "yerba",
        descripcion: "Yerba Mate Pindaré Tradicional 1kg",
        precio: 100,
        imagen:"https://static.wixstatic.com/media/cb31e7_b5bbded3dcb04ff7860a583874ff20f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg", 
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
