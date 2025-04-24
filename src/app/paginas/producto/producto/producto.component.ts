import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  productos = [
    { 
      id:1,
      img:"https://grupomaterojo.com.ar/wp-content/uploads/Productos-Grupo-Mate-Rojo-Canarias-1kg.jpg",
      nombre: "Producto 1", 
      precio: 100
    },
    { 
      id:2,
      img:"https://th.bing.com/th/id/OIP.5hOX94C1e44Z-wJaIxrTewHaHa?rs=1&pid=ImgDetMain",
      nombre: "Producto 2", 
      precio: 100
    },
    { 
      id:3,
      img:"https://static.wixstatic.com/media/cb31e7_b5bbded3dcb04ff7860a583874ff20f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      nombre: "Producto 2", 
      precio: 100
    },
  ]
  
  usuario = {
    nombre: 'Martin',
    activo: true
  }

}