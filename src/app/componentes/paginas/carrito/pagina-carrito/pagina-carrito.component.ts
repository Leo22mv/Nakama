import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { ListaProductosService } from 'src/app/servicios/lista-productos.service';

@Component({
  selector: 'app-pagina-carrito',
  templateUrl: './pagina-carrito.component.html',
  styleUrls: ['./pagina-carrito.component.css']
})
export class PaginaCarritoComponent implements OnInit {

  listaCarrito: IProducto[] = []

  constructor(private lpServ: ListaProductosService) { }

  ngOnInit(): void {
    this.listaCarrito = this.lpServ.listaCarrito
  }

}
