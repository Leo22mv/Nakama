import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-pagina-tienda',
  templateUrl: './pagina-tienda.component.html',
  styleUrls: ['./pagina-tienda.component.css']
})
export class PaginaTiendaComponent implements OnInit {

  ordenActual: string = "precioDescendente";
  categoriaActual: string = "todos";
  listaProductosTotal: any[] = []


  constructor(private prodServ: ProductosService) {
    this.getProductos();
  }

  ngOnInit(): void {
  }

  getProductos() {
    this.prodServ.obtener().subscribe(
      data => {
        this.listaProductosTotal = data[0];
        // console.log(data)
      },
      error => {
        alert("Error")
      }
    )
  }

  actualizarOrden(orden: string){
    this.ordenActual = orden;
  }

  actualizarCategoria(categoria: string) {
    this.categoriaActual = categoria;
  }

}
