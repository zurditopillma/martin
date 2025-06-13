import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  Productos: Producto[] = [

    {
      id: 1,
      Nombre: "canarias",
      descripcion: "Yerba Mate Canarias Sabor Tradicional",
      precio: 13000,
      imagen: "https://th.bing.com/th/id/OIP.oh2YDoquJazp_u_i9sdSNQHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
    },
    {
      id: 2,
      Nombre: "Producto 2",
      descripcion: "Canarias Serena Yerba Mate",
      precio: 12000,
      imagen: "https://th.bing.com/th/id/OIP.5DQHuyRSx295EWvU06IqAQHaHa?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
    },
    {
      id: 3,
      Nombre: "Producto 3",
      descripcion: "Yerba Mate Canarias Te Verde Y Jengibre",
      precio: 7500,
      imagen: "https://www.deliargentina.com/image/cache/catalog/product/mates/yerba-canarias-te-verde-jengibre-1-kilo-uruguay-brasil-para-tomar-mate-uruguayo/yerba-mate-canarias-te-verde-y-jengibre-1-kg-uruguay-brasil-1280x1280.jpg",
      disponibilidad: true,
      cantidad: 50,
    },
    {
      id: 4,
      Nombre: "Producto 4",
      descripcion: "Yerba Mate Canarias EDICIÓN ESPECIAL",
      precio: 7500,
      imagen: "https://th.bing.com/th/id/OIP.3lw2P3gYpZQ8mj8ybUR7lwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
    },

    {
      id: 5,
      Nombre: "Producto 5",
      descripcion: "Yerba Mate with Pu'Er Tea and Centella Rare Blend from Uruguay",
      precio: 7500,
      imagen: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/255/718/rojo__55788.1646955094.jpg?c=2",
      disponibilidad: true,
      cantidad: 50,
    },
  ]

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService) { }

  //METODO PARA AGREGAR UN PRODUCTO AL CARRITO
  agregar(producto: Producto) {
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