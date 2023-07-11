import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-tienda',
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css']
})
export class PaginaTiendaComponent implements OnInit {

  ordenActual: string = "precioDescendente";
  categoriaActual: string = "todos"

  constructor() { }

  ngOnInit(): void {
  }

  actualizarOrden(orden: string){
    this.ordenActual = orden;
  }

  actualizarCategoria(categoria: string) {
    this.categoriaActual = categoria;
  }

}
