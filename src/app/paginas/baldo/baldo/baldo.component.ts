import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../servicios/product.service';
import { FavoritoService } from '../../../servicios/favoritos/favoritos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baldo',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './baldo.component.html',
  styleUrl: './baldo.component.css'
})
export class BaldoComponent {

  productos: Producto[] = [
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

     {
      id: 1,
      Nombre: "canarias",
      descripcion: "Yerba Mate Canarias Sabor Tradicional",
      precio: 12500,
      imagen: "https://th.bing.com/th/id/OIP.oh2YDoquJazp_u_i9sdSNQHaHa?cb=iwp2&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Canaria",
    },
    {
      id: 2,
      Nombre: "Producto 2",
      descripcion: "Canarias Serena Yerba Mate",
      precio: 13500,
      imagen: "https://th.bing.com/th/id/OIP.5DQHuyRSx295EWvU06IqAQHaHa?rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Canaria",
    },
    {
      id: 3,
      Nombre: "Producto 3",
      descripcion: "Yerba Mate Canarias Te Verde Y Jengibre",
      precio: 5500,
      imagen: "https://www.deliargentina.com/image/cache/catalog/product/mates/yerba-canarias-te-verde-jengibre-1-kilo-uruguay-brasil-para-tomar-mate-uruguayo/yerba-mate-canarias-te-verde-y-jengibre-1-kg-uruguay-brasil-1280x1280.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Canaria",
    },
    {
      id: 4,
      Nombre: "Producto 4",
      descripcion: "Yerba Mate Canarias EDICIÓN ESPECIAL",
      precio: 7500,
      imagen: "https://th.bing.com/th/id/OIP.3lw2P3gYpZQ8mj8ybUR7lwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Canaria",
    },
    {
      id: 5,
      Nombre: "Producto 5",
      descripcion: "Yerba Mate with Pu'Er Tea and Centella Rare Blend from Uruguay",
      precio: 7500,
      imagen: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/590x590/products/255/718/rojo__55788.1646955094.jpg?c=2",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Canaria",
    },

    {
      id: 1,
      Nombre: "Mate",
      descripcion: "TORPEDO VAQUETA",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_7996.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },

    {
      id: 2,
      Nombre: "Mate",
      descripcion: "TORPEDO VAQUETA",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-61.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 3,
      Nombre: "Mate",
      descripcion: "TORPEDO LABRADO ARGENTINA",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-42.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 4,
      Nombre: "Mate",
      descripcion: "TORPEDO EXCLUSIVO CON CUERO CRUDO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-1-e1741975507259.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 5,
      Nombre: "Mate",
      descripcion: "TORPEDO EXCLUSIVO CON CUERO DE LAGARTO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-20.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 6,
      Nombre: "Mate",
      descripcion: "TORPEDO PREMIUM",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_7928.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 7,
      Nombre: "Mate",
      descripcion: "TORPEDO TALLADO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11475.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 8,
      Nombre: "Mate",
      descripcion: "TORPEDO CUERO TRABAJADO CON VIROLA CINCELADA Y BASE",
      precio: 100,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/621/530/products/img_1219-dc1285a1f47d6d320417338689972742-1024-1024.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 9,
      Nombre: "Mate",
      descripcion: "Torpedo Premium Alpaca Cincelada y base con bolitas",
      precio: 100,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/621/530/products/20230831_1539011-37d5da10ec4da4fcd716935087366217-640-0.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 10,
      Nombre: "Mate",
      descripcion: "TORPEDO DE ALPACA CINCELADA CUERO CROCCO Y BASE DE ALPACA",
      precio: 100,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/621/530/products/251-c7fa2984d2eafdc31416814248320697-640-0.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 11,
      Nombre: "Mate",
      descripcion: "TORPEDO BRONCE CON ALPACA CINCELADA",
      precio: 100,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/621/530/products/imagen-de-whatsapp-2024-01-16-a-las-18-07-52_050fea33-54273e85a9693a200e17054425984273-640-0.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },
    {
      id: 12,
      Nombre: "Mate",
      descripcion: "TORPEDO IMPERIAL",
      precio: 100,
      imagen: "https://acdn-us.mitiendanube.com/stores/001/621/530/products/imagen_de_whatsapp_2023-11-30_a_las_18-45-15_0affaf27-removebg-preview-12095a259b11f7baf217013837268123-640-0.webp",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Torpedo",
    },

    {
      id: 1,
      Nombre: "yerba",
      descripcion: "Yerba Mate Pindaré Tradicional 1kg",
      precio: 7000,
      imagen: "https://static.wixstatic.com/media/cb31e7_b5bbded3dcb04ff7860a583874ff20f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Yerba",
      marca: "Pindare",
    },

    {
      id: 1,
      Nombre: "Mate",
      descripcion: "CAMIONERO CINCELADO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8283.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 2,
      Nombre: "Mate",
      descripcion: "CAMIONERO COPA LISO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8360.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 3,
      Nombre: "Mate",
      descripcion: "CAMIONERO COPA TRENZADO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8363.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 4,
      Nombre: "Mate",
      descripcion: "Camionero Vaqueta",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8406.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 5,
      Nombre: "Mate",
      descripcion: "CAMIONERO ARGENTINO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/08/TodoMates-137-300x300.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 6,
      Nombre: "Mate",
      descripcion: "CAMIONERO BORDO CINCELADO ARTESANAL EXCLUSIVO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/06Sep2024-Kobe-TodoMates-29.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 6,
      Nombre: "Mate",
      descripcion: "CAMIONERO COPA NEGRO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11443.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 7,
      Nombre: "Mate",
      descripcion: "CAMIONERO COPA MARRON",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11398.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 8,
      Nombre: "Mate",
      descripcion: "CAMIONERO COPA SUELA",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_11402.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 9,
      Nombre: "Mate",
      descripcion: "CAMIONERO LABRADO MARRON",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_10770_web.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 10,
      Nombre: "Mate",
      descripcion: "CAMIONERO LABRADO NEGRO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TODOMATES_10776_web.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 11,
      Nombre: "Mate",
      descripcion: "CAMIONERO PREMIUM BORDO ALPACA",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8345.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 12,
      Nombre: "Mate",
      descripcion: "CAMIONERO PREMIUM NEGRO",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8093.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 13,
      Nombre: "Mate",
      descripcion: "CAMIONERO SUELA PREMIUM",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2022/12/TodoMates-97.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },
    {
      id: 14,
      Nombre: "Mate",
      descripcion: "CUERO REPUJADO CON TAPA MATE",
      precio: 100,
      imagen: "https://todomates.com.ar/wp-content/uploads/2021/05/MATES_8355-600x600.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Camionero",
    },

    {
      id: 1,
      Nombre: "Mate",
      descripcion: "MATE IMPERIAL ALGARROBO RÚSTICO",
      precio: 100,
      imagen: "https://d22fxaf9t8d39k.cloudfront.net/7505b9adc570418b349ffc0bddd72eba5ad794ec8db4f0c7eb925a1b69907ffb19762.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Algarrobo",
    },

    {
      id: 2,
      Nombre: "Mate",
      descripcion: "SET MATERO RÚSTICO MATE + TERMO + BOMBILLA",
      precio: 67900,
      imagen: "https://d22fxaf9t8d39k.cloudfront.net/536130a5fcb475c02bbe1e920f6b2d12b376978a5ae80993bbf47a13ada6cf8019762.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Algarrobo",
    },

    {
      id: 3,
      Nombre: "Mate",
      descripcion: "MATE IMPERIAL RÚSTICO PERSONALIZADO",
      precio: 67900,
      imagen: "https://d22fxaf9t8d39k.cloudfront.net/0e53dd4e63daee5c0b81e6524527b4f14da40867409bcefdad7d1edcf8efbb5419762.jpg",
      disponibilidad: true,
      cantidad: 50,
      categoria: "Mate",
      marca: "Algarrobo",
    },
  

  ];

  constructor(
    private carritoService: CarritoService,
    private favoritosService: FavoritoService,
    private productService: ProductService
  ) { }

  cargando = true;
  error = '';

  ngOnInit(): void {
    this.cargarProductos();

  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (res: any) => {
        this.productos = res;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos.';
        this.cargando = false;
      }
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => console.log('Producto agregado'),
      error: err => console.error(err)
    });
  }

  agregarAFavoritos(producto: Producto): void {
    this.favoritosService.agregarFavorito(producto).subscribe({
      next: () => console.log('Agregado'),
      error: (err) => console.error(err)
    });
  }

  
  
}
