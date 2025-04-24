import { Routes } from '@angular/router';
import path from 'node:path';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { OfertaComponent } from './paginas/oferta/oferta/oferta.component';
import { ProductoComponent } from './paginas/producto/producto/producto.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';


export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'carrito',component:CarritoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'inicio',component:InicioComponent},
    {path:'oferta',component:OfertaComponent},
    {path:'producto',component:ProductoComponent},
    {path:'quienessomos',component:QuienessomosComponent}
];
