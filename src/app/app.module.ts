import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/paginas/inicio/inicio.component';
import { ProductosComponent } from './componentes/paginas/productos/productos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PaginaInicioComponent } from './componentes/paginas/inicio/pagina-inicio/pagina-inicio.component';
import { BannerComponent } from './componentes/paginas/inicio/pagina-inicio/banner/banner.component';
import { DestacadosComponent } from './componentes/paginas/inicio/pagina-inicio/destacados/destacados.component';
import { PaginaTiendaComponent } from './componentes/paginas/productos/pagina-tienda/pagina-tienda.component';
import { FiltrosComponent } from './componentes/paginas/productos/pagina-tienda/filtros/filtros.component';
import { ListaProductosComponent } from './componentes/paginas/productos/pagina-tienda/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/paginas/productos/pagina-tienda/lista-productos/producto/producto.component';
import { OrdenarComponent } from './componentes/paginas/productos/pagina-tienda/ordenar/ordenar.component';
import { PaginacionComponent } from './componentes/paginas/productos/pagina-tienda/paginacion/paginacion.component';
import { CategoriasComponent } from './componentes/paginas/productos/pagina-tienda/categorias/categorias.component';
import { LoginComponent } from './componentes/paginas/login/login.component';
import { PaginaLoginComponent } from './componentes/paginas/login/pagina-login/pagina-login.component';
import { TituloComponent } from './componentes/paginas/login/pagina-login/titulo/titulo.component';
import { LoginFormComponent } from './componentes/paginas/login/pagina-login/login-form/login-form.component';
import { RegistrarseComponent } from './componentes/paginas/login/pagina-login/registrarse/registrarse.component';
import { RegisterComponent } from './componentes/paginas/register/register.component';
import { RegisterFormComponent } from './componentes/paginas/register/register-form/register-form.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TituloRComponent } from './componentes/paginas/register/titulo-r/titulo-r.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CarritoComponent } from './componentes/paginas/carrito/carrito.component';
import { IsoComponent } from './componentes/header/iso/iso.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { AInicioComponent } from './componentes/header/a-inicio/a-inicio.component';
import { ATiendaComponent } from './componentes/header/a-tienda/a-tienda.component';
import { AContactoComponent } from './componentes/header/a-contacto/a-contacto.component';
import { ALoginComponent } from './componentes/header/a-login/a-login.component';
import { LogoutComponent } from './componentes/header/logout/logout.component';
import { ColapsadorComponent } from './componentes/header/colapsador/colapsador.component';
import { CarritoBtnComponent } from './componentes/header/carrito-btn/carrito-btn.component';
import { PaginaCarritoComponent } from './componentes/paginas/carrito/pagina-carrito/pagina-carrito.component';
import { ListaItemsComponent } from './componentes/paginas/carrito/pagina-carrito/lista-items/lista-items.component';
import { ItemComponent } from './componentes/paginas/carrito/pagina-carrito/lista-items/item/item.component';
import { TituloCarritoComponent } from './componentes/paginas/carrito/pagina-carrito/titulo-carrito/titulo-carrito.component';
import { CheckoutComponent } from './componentes/paginas/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { APerfilComponent } from './componentes/header/a-perfil/a-perfil.component';
import { PerfilComponent } from './componentes/paginas/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    HeaderComponent,
    PaginaInicioComponent,
    BannerComponent,
    DestacadosComponent,
    PaginaTiendaComponent,
    FiltrosComponent,
    ListaProductosComponent,
    ProductoComponent,
    OrdenarComponent,
    PaginacionComponent,
    CategoriasComponent,
    LoginComponent,
    PaginaLoginComponent,
    TituloComponent,
    LoginFormComponent,
    RegistrarseComponent,
    RegisterComponent,
    RegisterFormComponent,
    FooterComponent,
    TituloRComponent,
    CarritoComponent,
    IsoComponent,
    LogoComponent,
    AInicioComponent,
    ATiendaComponent,
    AContactoComponent,
    ALoginComponent,
    LogoutComponent,
    ColapsadorComponent,
    CarritoBtnComponent,
    PaginaCarritoComponent,
    ListaItemsComponent,
    ItemComponent,
    TituloCarritoComponent,
    CheckoutComponent,
    APerfilComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // FormBuilder
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
