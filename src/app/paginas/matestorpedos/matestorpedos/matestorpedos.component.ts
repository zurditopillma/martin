import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-matestorpedos',
  imports: [CommonModule, RouterModule],
  templateUrl: './matestorpedos.component.html',
  styleUrl: './matestorpedos.component.css'
})
export class MatestorpedosComponent {

  Productos: Producto[] = [
      
          { 
            id:1,
            Nombre: "Mate",
            descripcion: "TORPEDO VAQUETA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_7996.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:2,
            Nombre: "Mate",
            descripcion: "TORPEDO VAQUETA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-61.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:3,
            Nombre: "Mate",
            descripcion: "TORPEDO LABRADO ARGENTINA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-42.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:4,
            Nombre: "Mate",
            descripcion: "TORPEDO EXCLUSIVO CON CUERO CRUDO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-1-e1741975507259.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:5,
            Nombre: "Mate",
            descripcion: "TORPEDO EXCLUSIVO CON CUERO DE LAGARTO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-20.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:6,
            Nombre: "Mate",
            descripcion: "TORPEDO PREMIUM",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_7928.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:7,
            Nombre: "Mate",
            descripcion: "TORPEDO TALLADO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11475.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:8,
            Nombre: "Mate",
            descripcion: "TORPEDO CUERO TRABAJADO CON VIROLA CINCELADA Y BASE",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/img_1219-dc1285a1f47d6d320417338689972742-1024-1024.webp", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:9,
            Nombre: "Mate",
            descripcion: "Torpedo Premium Alpaca Cincelada y base con bolitas",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/20230831_1539011-37d5da10ec4da4fcd716935087366217-640-0.webp", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:10,
            Nombre: "Mate",
            descripcion: "TORPEDO DE ALPACA CINCELADA CUERO CROCCO Y BASE DE ALPACA",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/251-c7fa2984d2eafdc31416814248320697-640-0.webp", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:11,
            Nombre: "Mate",
            descripcion: "TORPEDO BRONCE CON ALPACA CINCELADA",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/imagen-de-whatsapp-2024-01-16-a-las-18-07-52_050fea33-54273e85a9693a200e17054425984273-640-0.webp", 
            disponibilidad: true,
            cantidad:50,
          },
          { 
            id:12,
            Nombre: "Mate",
            descripcion: "TORPEDO IMPERIAL",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/imagen_de_whatsapp_2023-11-30_a_las_18-45-15_0affaf27-removebg-preview-12095a259b11f7baf217013837268123-640-0.webp", 
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
