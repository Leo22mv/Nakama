import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../producto-interface';

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

  constructor() { }

  ngOnInit(): void {
  }

}
