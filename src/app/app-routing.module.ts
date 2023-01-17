import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { ProductosComponent } from './componentes/paginas/productos/productos.component';
import { RegisterComponent } from './componentes/paginas/register/register.component';

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "tienda", component: ProductosComponent, children: [
    // {path: "ropa", component: ProductosComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "registrarse", component: RegisterComponent},
  {path: "carrito", component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
