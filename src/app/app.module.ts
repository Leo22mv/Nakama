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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    HeaderComponent,
    PaginaInicioComponent,
    BannerComponent,
    DestacadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
