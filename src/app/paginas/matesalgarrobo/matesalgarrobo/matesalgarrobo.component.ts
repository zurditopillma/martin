import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../servicios/product.service';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-matesalgarrobo',
  imports: [CommonModule, RouterModule],
  templateUrl: './matesalgarrobo.component.html',
  styleUrl: './matesalgarrobo.component.css'
})
export class MatesalgarroboComponent {



  productos: Producto[] = [

    
  ]
  constructor(private carritoService: CarritoService, private favoritosService: FavoritoService, private prductService: ProductService) { }
  
  
    // Estado para mostrar un spinner o mensaje de carga.
    cargando = true;
  
    // Texto para mostrar un error en la interfaz si algo falla.
    error = '';
  
    // Método del ciclo de vida, se ejecuta al inicializar el componente.
    ngOnInit(): void {
      this.cargarProductos(); // Carga inicial de productos.
    }
  
    // Solicita al backend la lista completa de productos.
    cargarProductos(): void {
      this.prductService.obtenerProductos().subscribe({
  
        // Si la petición es exitosa:
        next: (res: any) => {
          this.productos = res;    // Se asigna la lista recibida.
          this.cargando = false;   // Finaliza el estado de carga.
        },
  
        // Si ocurre un error:
        error: (err) => {
          console.error('Error al cargar productos:', err);
          this.error = 'No se pudieron cargar los productos.'; // Mensaje visible al usuario.
          this.cargando = false;
        }
      });
    }
  
    // Agrega un producto al carrito llamando al servicio correspondiente.
    agregarAlCarrito(producto: Producto): void {
      this.carritoService.agregarAlCarrito(producto).subscribe({
        next: () => console.log('Producto agregado'),
        error: err => console.error(err)
      });
    }
  
    // Agrega un producto a la lista de favoritos del usuario.
    agregarAFavoritos(producto: Producto): void {
      this.favoritosService.agregarFavorito(producto).subscribe({
        next: () => console.log('Agregado'),
        error: (err) => console.error(err)
      });
    }
}
