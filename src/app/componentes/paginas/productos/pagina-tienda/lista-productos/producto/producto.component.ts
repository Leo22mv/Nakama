import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { IProducto } from '../../../../../../modelos/producto-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: IProducto) {
    if (localStorage.getItem("token")) {
      this.auth.listaCarrito.push(producto);
    } else {
      this.router.navigate(["/login"])
    }    
  }

}
