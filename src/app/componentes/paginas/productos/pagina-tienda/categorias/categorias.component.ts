import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnChanges {

  categoriaTodas: string | undefined;

  categoriaRopa: string | undefined;

  categoriaActiva: string | undefined;

  claseCategoriaInactiva: string = "dropdown-item";

  claseCategoriaActiva: string = "dropdown-item active";

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => this.categoriaActiva = params['categoria']);

    if (this.categoriaActiva=="ropa") {
      this.categoriaRopa = this.claseCategoriaActiva;
      this.categoriaTodas = this.claseCategoriaInactiva;
    } else {
      this.categoriaRopa = this.claseCategoriaInactiva;
      this.categoriaTodas = this.claseCategoriaActiva;
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.route.queryParams.subscribe(params => this.categoriaActiva = params['categoria']);

    if (this.categoriaActiva=="ropa") {
      this.categoriaRopa = this.claseCategoriaActiva;
      this.categoriaTodas = this.claseCategoriaInactiva;
    } else {
      this.categoriaRopa = this.claseCategoriaInactiva;
      this.categoriaTodas = this.claseCategoriaActiva;
    }
  }

  filtrarCategoria() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoria: "ropa"
      }
    }

    this.router.navigate(["/tienda"], navigationExtras)
  }

}
