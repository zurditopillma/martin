import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';
import { ProductService } from '../../../servicios/product.service';

@Component({
  selector: 'app-mates',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './mates.component.html',
  styleUrl: './mates.component.css'
})
export class MatesComponent {


  productos: Producto[] = [

    {
      id: 1,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://elboyero.com/21292-thickbox_default/mate-imperial-con-virola-de-alpaca-lisa-el-boyero.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 2,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://darccuir-yatay.com.ar/wp-content/uploads/2021/02/mate-5-600x600.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 3,
      Nombre: "mate",
      descripcion: "Mate Imperial Cincelado",
      precio: 100,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_955036-MLA84476700143_052025-O.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 4,
      Nombre: "mate",
      descripcion: "Mate Imperial Flores Alpaca",
      precio: 100,
      imagen: "https://th.bing.com/th/id/OIP.xSKGArEP4ZhmxiEARU-XEwHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 5,
      Nombre: "mate",
      descripcion: "Mate Imperial Cincelado ",
      precio: 100,
      imagen: "https://http2.mlstatic.com/D_NQ_NP_925525-MLU74859027760_032024-O.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 6,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://th.bing.com/th/id/OIP.tYaoceBumiS9xrVJo4wpiQHaHa?cb=iwp2&w=1600&h=1600&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 7,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://th.bing.com/th/id/OIP.OCVF1gU4eyTEuy7MOup4ugHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 8,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/608x608/products/10128/28102/Laska_Mates_Mate_Imperial_Premium_Imperial_Gourd_Mate_Lined_in_Genuine_Leather_AFA_Bronze_Shield_Calabaza_Cincelado_Escudo_AFA_Black__79747.1713205609.jpg?c=2",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 9,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11394.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
    },

    {
      id: 10,
      Nombre: "mate",
      descripcion: "mates imperiales",
      precio: 100,
      imagen: "https://d22fxaf9t8d39k.cloudfront.net/db271fb842a111d3961686e4b64aefce927a3aed9ebf6935d86c326f4109814a82448.jpeg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Imperial",
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
