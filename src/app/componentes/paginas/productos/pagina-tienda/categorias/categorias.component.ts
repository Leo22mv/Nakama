import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnChanges {

  categoriaActiva: string = "todas";

  // claseCategoriaInactiva: string = "dropdown-item";

  // claseCategoriaActiva: string = "dropdown-item active";

  categoriaTodas: string = "dropdown-item active";
  categoriaRopa: string = "dropdown-item";
  categoriaOtros: string = "dropdown-item";

  @Output() ordenarEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => this.categoriaActiva = params['categoria']);

    // if (this.categoriaActiva=="ropa") {
    //   this.categoriaRopa = this.claseCategoriaActiva;
    //   this.categoriaTodas = this.claseCategoriaInactiva;
    // } else {
    //   this.categoriaRopa = this.claseCategoriaInactiva;
    //   this.categoriaTodas = this.claseCategoriaActiva;
    // }

  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  filtrarCategoria(origen: string) {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     categoria: "ropa"
    //   }
    // }

    // this.router.navigate(["/tienda"], navigationExtras)
    if (origen!=this.categoriaActiva) {
      this.actualizarCategoria(origen);
      this.categoriaActiva = origen;
      this.ordenarEmit.emit(this.categoriaActiva);
    }
  }

  actualizarCategoria(origen: string) {
    switch (origen) {
        case "ropa":
          this.categoriaTodas = "dropdown-item";
          this.categoriaRopa = "dropdown-item active";
          this.categoriaOtros = "dropdown-item";
        break

        case "todas":
          this.categoriaTodas = "dropdown-item active";
          this.categoriaRopa = "dropdown-item";
          this.categoriaOtros = "dropdown-item";
        break

        case "otros":
          this.categoriaTodas = "dropdown-item";
          this.categoriaRopa = "dropdown-item";
          this.categoriaOtros = "dropdown-item active";
        break

        this.categoriaActiva = origen;
      // } else {

      // }
    }
  }

}
