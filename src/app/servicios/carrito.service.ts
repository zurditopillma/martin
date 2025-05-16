import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoSubjet = new BehaviorSubject <{ producto: Producto; cantidad: number}[]>([]);
  carrito$ = this.carritoSubjet.asObservable();
  agregarAlCarrito(producto:Producto){
    const productos = this.carritoSubjet.getValue();
    const encontrado = productos.find(p => p.producto.id == producto.id);
    if(encontrado){
      encontrado.cantidad++
    }else{
      this.carritoSubjet.next([...productos,{producto, cantidad:1}])
    }
  }

  eliminarDelCarrito(productoId:number){
    const productos = this.carritoSubjet.getValue().filter(p => p.producto.id !== productoId)
    this.carritoSubjet.next(productos)
  }

  vaciarCarrito(){
    this.carritoSubjet.next([])
  }

  constructor() { }
}