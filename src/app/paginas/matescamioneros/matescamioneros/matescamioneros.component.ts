import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';
import { CarritoService } from '../../../servicios/carrito.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matescamioneros',
  imports: [CommonModule, RouterModule],
  templateUrl: './matescamioneros.component.html',
  styleUrl: './matescamioneros.component.css'
})
export class MatescamionerosComponent {

  Productos: Producto[] = [
      
          { 
            id:1,
            Nombre: "Mate",
            descripcion: "CAMIONERO CINCELADO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8283.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          
          { 
            id:2,
            Nombre: "Mate",
            descripcion: "CAMIONERO COPA LISO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8360.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:3,
            Nombre: "Mate",
            descripcion: "CAMIONERO COPA TRENZADO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8363.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:4,
            Nombre: "Mate",
            descripcion: "Camionero Vaqueta",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8406.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:5,
            Nombre: "Mate",
            descripcion: "CAMIONERO ARGENTINO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/08/TodoMates-137-300x300.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:6,
            Nombre: "Mate",
            descripcion: "CAMIONERO BORDO CINCELADO ARTESANAL EXCLUSIVO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-29.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:6,
            Nombre: "Mate",
            descripcion: "CAMIONERO COPA NEGRO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11443.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:7,
            Nombre: "Mate",
            descripcion: "CAMIONERO COPA MARRON",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11398.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:8,
            Nombre: "Mate",
            descripcion: "CAMIONERO COPA SUELA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11402.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:9,
            Nombre: "Mate",
            descripcion: "CAMIONERO LABRADO MARRON",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_10770_web.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:10,
            Nombre: "Mate",
            descripcion: "CAMIONERO LABRADO NEGRO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_10776_web.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:11,
            Nombre: "Mate",
            descripcion: "CAMIONERO PREMIUM BORDO ALPACA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8345.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:12,
            Nombre: "Mate",
            descripcion: "CAMIONERO PREMIUM NEGRO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8093.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:13,
            Nombre: "Mate",
            descripcion: "CAMIONERO SUELA PREMIUM",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TodoMates-97.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:14,
            Nombre: "Mate",
            descripcion: "CUERO REPUJADO CON TAPA MATE",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8355-600x600.jpg", 
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
