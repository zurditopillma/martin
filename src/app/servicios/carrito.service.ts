import { Injectable } from '@angular/core';
import { BehaviorSubject, reduce } from 'rxjs';
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

  //Metodo para actualizar la cantidad de un un procucto en el carrito
  actualizarCantidad(productoId: number,nuevaCantidad:number){
    //Recorremos el carrito y actualizamos la cantidad del producto con el ID dado
    const productos = this.carritoSubjet.getValue().map(item => {
      if(item.producto.id === productoId){
        //retornamos una copia del producto con la nueva cantidad
        return{...item,cantidad:nuevaCantidad};
      }
      return item
    })

    //emitimos el nuevo estadodel carrito
    this.carritoSubjet.next(productos)
  }

  //metodo para obtener los productos en carrito con un arreglo
  obtenerProductos():{producto:Producto;cantidad:number}[]{
    return this.carritoSubjet.getValue();
  }

  //metodo para calcular el total a pagar (precio*cantidad de cada producto)
  obtenerTotal(): number{
    const productos = this.carritoSubjet.getValue();
    //usamos reduce para sumar los subtotales de cada producto
    return productos.reduce((total,item)=> total + item.producto.precio*item.cantidad, 0)
  }

  constructor() { }
}