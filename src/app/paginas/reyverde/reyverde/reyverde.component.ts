import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';
import { ProductService } from '../../../servicios/product.service';



@Component({
  selector: 'app-reyverde',
  imports: [CommonModule, RouterModule],
  templateUrl: './reyverde.component.html',
  styleUrl: './reyverde.component.css'
})
export class ReyverdeComponent {

 

  productos: Producto[] = [

    {
      id: 1,
      Nombre: "Yerba",
      descripcion: "Rei Verde yerba mate tradicional",
      precio: 100,
      imagen: "https://th.bing.com/th/id/OIP.DtzR8B-LT6lPuAFJ8FYn1AHaJ4?cb=iwp1&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Rey Verde",
    },
    {
      id: 2,
      Nombre: "Yerba",
      descripcion: "Yerba Rei Verde Clasica",
      precio: 100,
      imagen: "https://flaming.ar/wp-content/uploads/2021/09/1237-jpg.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Rey Verde",
    },
    {
      id: 3,
      Nombre: "Yerba",
      descripcion: "Yerba Mate Padrón Argentino Rei Verde",
      precio: 100,
      imagen: "https://apolomates.com.ar/wp-content/uploads/2021/11/51-95e41cbc16267ab74e16295578709488-480-0-1-1.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Rey Verde",
    },
    {
      id: 4,
      Nombre: "Yerba",
      descripcion: "Yerba Mate Premium Rei Verde",
      precio: 100,
      imagen: "https://th.bing.com/th/id/OIP.npBE86b0-RWhevGHSAvnzAHaHa?cb=iwp1&w=600&h=600&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Rey Verde",
    },


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
