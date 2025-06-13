import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matesalgarrobo',
  imports: [CommonModule, RouterModule],
  templateUrl: './matesalgarrobo.component.html',
  styleUrl: './matesalgarrobo.component.css'
})
export class MatesalgarroboComponent {

  Productos: Producto[] = [
      
          { 
            id:1,
            Nombre: "Mate",
            descripcion: "MATE IMPERIAL ALGARROBO RÚSTICO",
            precio: 100,
            imagen:"https://d22fxaf9t8d39k.cloudfront.net/7505b9adc570418b349ffc0bddd72eba5ad794ec8db4f0c7eb925a1b69907ffb19762.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:2,
            Nombre: "Mate",
            descripcion: "SET MATERO RÚSTICO MATE + TERMO + BOMBILLA",
            precio: 67900,
            imagen:"https://d22fxaf9t8d39k.cloudfront.net/536130a5fcb475c02bbe1e920f6b2d12b376978a5ae80993bbf47a13ada6cf8019762.jpg", 
            disponibilidad: true,
            cantidad:50,
          },

          { 
            id:3,
            Nombre: "Mate",
            descripcion: "MATE IMPERIAL RÚSTICO PERSONALIZADO",
            precio: 67900,
            imagen:"https://d22fxaf9t8d39k.cloudfront.net/0e53dd4e63daee5c0b81e6524527b4f14da40867409bcefdad7d1edcf8efbb5419762.jpg", 
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
