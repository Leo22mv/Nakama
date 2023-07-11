import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ListaProductosComponent } from '../lista-productos/lista-productos.component';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  claseActivo: string = "dropdown-item active"
  claseInactivo: string = "dropdown-item"

  ordenActual: string = "precioDescendente"

  @Output() ordenarEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  ordenarPrecioAscendente() {
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     ordenar: "precio ascendente"
    //   }
    // }

    // this.router.navigate(["/tienda"], navigationExtras)
    if (this.ordenActual!="precioAscendente") {
      this.cambiarClases();
    }
    this.ordenActual = "precioAscendente"
    this.ordenarEmit.emit(this.ordenActual);
  }

  ordenarPrecioDescendente() {
    if (this.ordenActual!="precioDescendente") {
      this.cambiarClases();
    }
    this.ordenActual = "precioDescendente"
    this.ordenarEmit.emit(this.ordenActual);
  }

  cambiarClases() {
    switch (this.claseActivo) {
      case "dropdown-item active":
        this.claseActivo = this.claseInactivo
        this.claseInactivo = "dropdown-item active"
      break

      case "dropdown-item":
        this.claseActivo = this.claseInactivo
        this.claseInactivo = "dropdown-item"
      break
    }

  }

}
