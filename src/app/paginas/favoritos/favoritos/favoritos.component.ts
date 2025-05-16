import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../../servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule,FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {

  productoEnFavoritos: {producto: Producto; cantidad: number}[] = [];
  
    constructor(private favoritosService: FavoritosService) {}
  
    ngOnInit(): void {
      this.favoritosService.favoritos$.subscribe((productos)=> {
        this.productoEnFavoritos = productos
      })
    }
    
    eliminarProducto(productoId:number){
      this.favoritosService.eliminarDeFavoritos(productoId)
    }
  vaciarFavoritos(){
    this.favoritosService.vaciarFavoritos();
  }
  

}
