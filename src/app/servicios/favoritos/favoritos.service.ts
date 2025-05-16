import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favoritosSubjet = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
  favoritos$ = this.favoritosSubjet.asObservable();
  agregarAFavoritos(producto: Producto) {
    const productos = this.favoritosSubjet.getValue();
    const encontrado = productos.find(p => p.producto.id == producto.id);
    if (encontrado) {
      encontrado.cantidad++
    } else {
      this.favoritosSubjet.next([...productos, { producto, cantidad: 1 }])
    }
  }

  eliminarDeFavoritos(productoId: number) {
    const productos = this.favoritosSubjet.getValue().filter(p => p.producto.id !== productoId)
    this.favoritosSubjet.next(productos)
  }

  vaciarFavoritos() {
    this.favoritosSubjet.next([])
  }


  constructor() { }
}
