import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';
import { ProductService } from '../../../servicios/product.service';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {



  productos: Producto[] = [

  ]
  constructor(private carritoService: CarritoService, private favoritosService: FavoritoService, private productService: ProductService) { }


  // Estado para mostrar un spinner o mensaje de carga.
  cargando = true;

  // Texto para mostrar un error en la interfaz si algo falla.
  error = '';

  // Método del ciclo de vida, se ejecuta al inicializar el componente.
  ngOnInit(): void {
    //this.cargarProductos(); // Carga inicial de productos.
  }

  // Solicita al backend la lista completa de productos.
  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({

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
      next: () => {
        console.log('Producto agregado');
        this.carritoService.cargarCarrito(); // Actualiza el carrito
      },
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


  searchTerm: string = '';

  selectedCategory: string = '';
  selectedBrand: string = '';
  minprecio: number | null = null;
  maxprecio: number | null = null;

  get categories(): string[] {
    return [...new Set(this.productos.map(p => p.categoria))]
  }

  get marcas(): string[] {
    return [...new Set(this.productos.map(p => p.marca))]
  }

  onSearch(event: Event): void {
    event.preventDefault();
  }

  resetfilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minprecio = null;
    this.maxprecio = null;
  }

  get filteredProducts(): Producto[] {
    return this.productos.filter(p =>
      (this.searchTerm === '' || p.Nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
      (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
      (this.minprecio === null || p.precio >= this.minprecio) &&
      (this.maxprecio === null || p.precio <= this.maxprecio)
    )
  }

}


