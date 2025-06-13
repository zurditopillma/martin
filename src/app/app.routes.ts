import { Routes } from '@angular/router';
import path from 'node:path';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { OfertaComponent } from './paginas/oferta/oferta/oferta.component';
import { ProductoComponent } from './paginas/producto/producto/producto.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';
import { BaldoComponent } from './paginas/baldo/baldo/baldo.component';
import { PindareComponent } from './paginas/pindare/pindare/pindare.component';
import { ReyverdeComponent } from './paginas/reyverde/reyverde/reyverde.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos/favoritos.component';
import { MatesComponent } from './paginas/mates/mates/mates.component';
import { MatesimperialesComponent } from './paginas/matesimperiales/matesimperiales/matesimperiales.component';
import { MatesalgarroboComponent } from './paginas/matesalgarrobo/matesalgarrobo/matesalgarrobo.component';
import { MatestorpedosComponent } from './paginas/matestorpedos/matestorpedos/matestorpedos.component';
import { MatescamionerosComponent } from './paginas/matescamioneros/matescamioneros/matescamioneros.component';
import { CompraComponent } from './paginas/compra/compra.component';


export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'carrito',component:CarritoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'inicio',component:InicioComponent},
    {path:'oferta',component:OfertaComponent},
    {path:'producto',component:ProductoComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    {path:'favoritos',component:FavoritosComponent},
    {path:'baldo',component:BaldoComponent},
    {path:'pindare',component:PindareComponent},
    {path:'reyverde',component:ReyverdeComponent},
    {path:'mates',component:MatesComponent},
    {path:'matesimperiales', component:MatesimperialesComponent},
    {path:'matesalgarrobo', component:MatesalgarroboComponent},
    {path:'matestorpedos', component:MatestorpedosComponent},
    {path:'matescamioneros', component:MatescamionerosComponent},
    {path:'compra', component:CompraComponent}
];