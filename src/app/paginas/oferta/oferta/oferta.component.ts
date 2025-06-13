import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oferta',
  imports: [CommonModule, RouterModule],
  templateUrl: './oferta.component.html',
  styleUrl: './oferta.component.css'
})
export class OfertaComponent {

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
            descripcion: "MATE IMPERIAL ALGARROBO RÚSTICO",
            precio: 100,
            imagen:"https://d22fxaf9t8d39k.cloudfront.net/7505b9adc570418b349ffc0bddd72eba5ad794ec8db4f0c7eb925a1b69907ffb19762.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
          
          { 
            id:3,
            Nombre: "mate",
            descripcion: "CAMIONERO COPA LISO",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8360.jpg", 
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
            descripcion: "TORPEDO BRONCE CON ALPACA CINCELADA",
            precio: 100,
            imagen:"https://todomates.com.ar/wp-content/uploads/2021/05/MATES_7996.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
  
          { 
            id:6,
            Nombre: "mate",
            descripcion: "yerba mate BALDO X 1 kilo",
            precio: 100,
            imagen:"https://canarias.com.uy/wp-content/uploads/2018/09/baldo.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
  
          { 
            id:7,
            Nombre: "mate",
            descripcion: "mates imperiales",
            precio: 100,
            imagen:"https://static.wixstatic.com/media/cb31e7_b5bbded3dcb04ff7860a583874ff20f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
  
          { 
            id:8,
            Nombre: "mate",
            descripcion: "mates imperiales",
            precio: 100,
            imagen:"https://www.deliargentina.com/image/cache/catalog/product/mates/yerba-canarias-te-verde-jengibre-1-kilo-uruguay-brasil-para-tomar-mate-uruguayo/yerba-mate-canarias-te-verde-y-jengibre-1-kg-uruguay-brasil-1280x1280.jpg", 
            disponibilidad: true,
            cantidad:50,
          },
  
          { 
            id:9,
            Nombre: "mate",
            descripcion: "mates imperiales",
            precio: 100,
            imagen:"https://flaming.ar/wp-content/uploads/2021/09/1237-jpg.webp", 
            disponibilidad: true,
            cantidad:50,
          },
  
          { 
            id:10,
            Nombre: "mate",
            descripcion: "mates imperiales",
            precio: 100,
            imagen:"https://acdn-us.mitiendanube.com/stores/001/621/530/products/imagen-de-whatsapp-2024-01-16-a-las-18-07-52_050fea33-54273e85a9693a200e17054425984273-640-0.webp", 
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
