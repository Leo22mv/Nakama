import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  nombre: string = "";
  descripcion: string = "";
  urlFoto: string = "";
  precio: number = 0;
  categoria: string = "";
  serie: string = "";
  stock: number = 0;

  constructor(private prodServ: ProductosService) { }

  ngOnInit(): void {
  }

  agregar() {
    this.prodServ.agregar(this.nombre, this.descripcion, "../../../../../../assets/img/isotipo.png", this.precio, this.categoria, this.serie, this.stock)
  }

}
