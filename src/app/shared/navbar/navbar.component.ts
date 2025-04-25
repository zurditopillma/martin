import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;
  constructor(private carritoService: CarritoService){
  }

  ngOnInit(): void {
    //escucha los cambios en el carrito pra actualizar la cantidad total de prductos

    this.carritoService.carrito$.subscribe((productos: { producto : Producto, cantidad : number}[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total+ item.cantidad,0) //suma la cantidad de productos
    })
  }

  onCarritoClick(){
    console.log('Carrito clicked');
  }
}
