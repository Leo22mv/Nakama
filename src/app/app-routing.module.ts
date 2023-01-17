import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { ProductosComponent } from './componentes/paginas/productos/productos.component';

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "tienda", component: ProductosComponent, children: [
    // {path: "ropa", component: ProductosComponent}
  ]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
