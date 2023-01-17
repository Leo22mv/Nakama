import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {

  listaCarrito: IProducto[] = []

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.listaCarrito = this.auth.listaCarrito
  }

}
