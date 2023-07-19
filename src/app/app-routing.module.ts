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
import { EliminarProductoComponent } from './componentes/paginas/admin/eliminar-producto/eliminar-producto.component';
import { PerfilComponent } from './componentes/paginas/perfil/perfil.component';
import { ComprasComponent } from './componentes/paginas/perfil/pagina-perfil/compras/compras.component';
import { ConfirmacionComponent } from './componentes/paginas/confirmacion/confirmacion.component';
import { VerComprasComponent } from './componentes/paginas/admin/ver-compras/ver-compras.component';

const routes: Routes = [
  {path: "confirmacion", component: ConfirmacionComponent},
  {path: "perfil", component: PerfilComponent, children: [
    {path:"compras", component:ComprasComponent}
  ]},
  {path: "admin", component: AdminComponent, children: [
    {path: "compras", component: VerComprasComponent},
    {path:"agregar", component: AgregarProductoComponent},
    {path:"eliminar", component: EliminarProductoComponent}
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
