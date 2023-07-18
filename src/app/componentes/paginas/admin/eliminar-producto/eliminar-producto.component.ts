import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  listaProductos: any[] = [];
  id: number = 0;

  constructor(private prodServ: ProductosService) { }

  ngOnInit(): void {
    this.prodServ.obtener().subscribe(res => {
      this.listaProductos = res;
    })
  }

  onSubmit() {
    console.log(this.id)
    this.prodServ.eliminarProducto(this.id)
  }

}
