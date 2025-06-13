import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mates',
  imports: [CommonModule, RouterModule],
  templateUrl: './mates.component.html',
  styleUrl: './mates.component.css'
})
export class MatesComponent {

  Productos: Producto[] = [
    
        { 
          id:1,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://elboyero.com/21292-thickbox_default/mate-imperial-con-virola-de-alpaca-lisa-el-boyero.jpg", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:2,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://darccuir-yatay.com.ar/wp-content/uploads/2021/02/mate-5-600x600.jpg", 
          disponibilidad: true,
          cantidad:50,
        },
        
        { 
          id:3,
          Nombre: "mate",
          descripcion: "Mate Imperial Cincelado Premium Floreado Cuero Trabajado",
          precio: 100,
          imagen:"https://http2.mlstatic.com/D_NQ_NP_955036-MLA84476700143_052025-O.webp", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:4,
          Nombre: "mate",
          descripcion: "Mate Imperial Flores Alpaca Cuero Cincelado",
          precio: 100,
          imagen:"https://th.bing.com/th/id/OIP.xSKGArEP4ZhmxiEARU-XEwHaHa?cb=iwp2&rs=1&pid=ImgDetMain", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:5,
          Nombre: "mate",
          descripcion: "Mate Imperial Cincelado Premium Floreado Cuero Trabajado",
          precio: 100,
          imagen:"https://http2.mlstatic.com/D_NQ_NP_925525-MLU74859027760_032024-O.webp", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:6,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://th.bing.com/th/id/OIP.tYaoceBumiS9xrVJo4wpiQHaHa?cb=iwp2&w=1600&h=1600&rs=1&pid=ImgDetMain", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:7,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://th.bing.com/th/id/OIP.OCVF1gU4eyTEuy7MOup4ugHaHa?cb=iwp2&rs=1&pid=ImgDetMain", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:8,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/608x608/products/10128/28102/Laska_Mates_Mate_Imperial_Premium_Imperial_Gourd_Mate_Lined_in_Genuine_Leather_AFA_Bronze_Shield_Calabaza_Cincelado_Escudo_AFA_Black__79747.1713205609.jpg?c=2", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:9,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://th.bing.com/th?id=OIF.FMA%2fOoiXWTAB1v8ijPiyqQ&cb=iwp2&rs=1&pid=ImgDetMain", 
          disponibilidad: true,
          cantidad:50,
        },

        { 
          id:10,
          Nombre: "mate",
          descripcion: "mates imperiales",
          precio: 100,
          imagen:"https://d22fxaf9t8d39k.cloudfront.net/db271fb842a111d3961686e4b64aefce927a3aed9ebf6935d86c326f4109814a82448.jpeg", 
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
