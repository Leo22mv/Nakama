import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { CheckoutComponent } from './componentes/paginas/checkout/checkout.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { ProductosComponent } from './componentes/paginas/productos/productos.component';
import { RegisterComponent } from './componentes/paginas/register/register.component';
import { AdminComponent } from './componentes/paginas/admin/admin.component';
import { AgregarProductoComponent } from './componentes/paginas/admin/agregar-producto/agregar-producto.component';

const routes: Routes = [
  {path: "admin", component: AdminComponent, children: [
    {path:"agregar", component: AgregarProductoComponent}
  ]},
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "tienda", component: ProductosComponent, children: [
    {path: "ropa", component: ProductosComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "registrarse", component: RegisterComponent},
  {path: "carrito", component: CarritoComponent},
  {path: "checkout", component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
