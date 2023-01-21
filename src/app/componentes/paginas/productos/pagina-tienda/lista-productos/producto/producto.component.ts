import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { IProducto } from '../../../../../../modelos/producto-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  botonActivo: string = "btn btn-outline-light btn-lg"

  @Input() producto: IProducto = {
    id: 0,
    urlFoto: "",
    precio: 0,
    nombre: "",
    descripcion: "",
    stock: 0,
    serie: "",
    categoria: ""
  };

  constructor(private auth: AuthService, private router: Router, private prserv: ProductosService) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: IProducto) {
    if (localStorage.getItem("token")) {
      this.auth.listaCarrito.push(producto);
    } else {
      this.router.navigate(["/login"])
    }
    this.prserv.activo = producto.id
    this.actualizarBoton()
  }

  actualizarBoton() {
    if (this.producto.id==this.prserv.activo) {
      this.botonActivo = "btn btn-outline-success btn-lg"
    } else {
      this.botonActivo = "btn btn-outline-light btn-lg"
    }
  }

}
