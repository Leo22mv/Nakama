import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { IProducto } from '../../../../../../modelos/producto-interface';
import { ListaProductosService } from 'src/app/servicios/lista-productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Output() evento: EventEmitter<boolean> = new EventEmitter<boolean>();

  botonActivo: string = "btn btn-outline-light btn-lg"

  @Input() producto: IProducto = {
    id: 0,
    urlFoto: "",
    precio: 0,
    nombre: "",
    descripcion: "",
    stock: 0,
    serie: "",
    categoria: "",
    activo: false,
    cantidad: 1
  };

  constructor(private auth: ListaProductosService, private router: Router, private prserv: ProductosService) { }

  ngOnInit(): void {
    // console.log(this.producto)
  }

  agregarAlCarrito(producto: IProducto) {
    if (localStorage.getItem("token")) {
      if(!producto.cantidad) {
        producto.cantidad = 1;
      }
      this.auth.listaCarrito.push(producto);
    } else {
      this.router.navigate(["/login"])
    }
    // this.prserv.activo = producto.id

    this.actualizarBoton()

    // this.producto.activo = true

    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     activo: true
    //   }
    // }

    // this.router.navigate(["/tienda"], navigationExtras)

  }

  actualizarBoton() {
    // if (this.producto.activo) {
    //   this.botonActivo = "btn btn-outline-light btn-lg"
    // } else {
    //   this.botonActivo = "btn btn-outline-success btn-lg"
    // }

    this.botonActivo = "btn btn-outline-success btn-lg"
    setTimeout(() => {
      this.botonActivo = "btn btn-outline-light btn-lg"
    }, 500);
  }

}
