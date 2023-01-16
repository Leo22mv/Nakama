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
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
