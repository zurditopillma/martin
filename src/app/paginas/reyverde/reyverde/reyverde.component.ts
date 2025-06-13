import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';


@Component({
  selector: 'app-reyverde',
  imports: [CommonModule, RouterModule],
  templateUrl: './reyverde.component.html',
  styleUrl: './reyverde.component.css'
})
export class ReyverdeComponent {
Productos: Producto[] = [

    { 
      id:1,
      Nombre: "Yerba",
      descripcion: "Rei Verde yerba mate tradicional",
      precio: 100,
      imagen:"https://th.bing.com/th/id/OIP.DtzR8B-LT6lPuAFJ8FYn1AHaJ4?cb=iwp1&rs=1&pid=ImgDetMain", 
      disponibilidad: true,
      cantidad:50,
    },
    { 
      id:2,
      Nombre: "Yerba",
      descripcion: "Yerba Rei Verde Clasica",
      precio: 100,
      imagen:"https://flaming.ar/wp-content/uploads/2021/09/1237-jpg.webp",
      disponibilidad: true,
      cantidad:50,
    },
    { 
      id:3,
      Nombre: "Yerba",
      descripcion: "Yerba Mate Padrón Argentino Rei Verde",
      precio: 100,
      imagen:"https://apolomates.com.ar/wp-content/uploads/2021/11/51-95e41cbc16267ab74e16295578709488-480-0-1-1.jpg",
      disponibilidad: true,
      cantidad:50,
    },
    { 
      id:4,
      Nombre: "Yerba",
      descripcion: "Yerba Mate Premium Rei Verde",
      precio: 100,
      imagen:"https://th.bing.com/th/id/OIP.npBE86b0-RWhevGHSAvnzAHaHa?cb=iwp1&w=600&h=600&rs=1&pid=ImgDetMain",
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
