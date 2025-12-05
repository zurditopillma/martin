import { Routes } from '@angular/router';
import path from 'node:path';
import { CarritoComponent } from './paginas/carrito/carrito/carrito.component';
import { ContactoComponent } from './paginas/contacto/contacto/contacto.component';
import { InicioComponent } from './paginas/inicio/inicio/inicio.component';
import { OfertaComponent } from './paginas/oferta/oferta/oferta.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos/quienessomos.component';
import { BaldoComponent } from './paginas/baldo/baldo/baldo.component';
import { CompraComponent } from './paginas/compra/compra.component';
import { InicioSesionComponent } from './paginas/auth/login/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './paginas/auth/login/registro/registro.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';




export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'carrito',component:CarritoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'inicio',component:InicioComponent},
    {path:'oferta',component:OfertaComponent},
    {path:'quienessomos',component:QuienessomosComponent},
    
    {path:'baldo',component:BaldoComponent},
    {path:'compra', component:CompraComponent},
    {path: 'login', component:InicioSesionComponent},
    {path: 'register', component:RegistroComponent},
    { path: 'compras', component: ComprasComponent},
    {
    path: 'ticket/:id',
    loadComponent: () =>
      import('./paginas/ticket/ticket.component')
      .then(m => m.TicketComponent)
  },
   { 
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
];