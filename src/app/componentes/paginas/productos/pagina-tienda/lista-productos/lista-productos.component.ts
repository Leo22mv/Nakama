import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IProducto } from './producto-interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  listaProductos: IProducto[] = [
    {
    id: 1,
    urlFoto: "../../../../../../assets/img/capa-akatsuki2.png",
    nombre: "Capa de Akatsuki",
    descripcion: "Atuendo característico de la organización criminal mas famosa del mundo.",
    stock: 1,
    serie: "Naruto",
    categoria: "ropa"
    },
    {
      id: 2,
      urlFoto: "../../../../../../assets/img/capamikasa2.png",
      nombre: "Capa del cuerpo de exploración",
      descripcion: "Uniforme del cuerpo encargado de explorar fuera de las murallas y matar titanes.",
      stock: 1,
      serie: "Attack on titan (Shingeki no kyojin)",
      categoria: "ropa"
    },
    {
      id: 3,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      nombre: "Producto",
      descripcion: "Aca iría la descripción del producto.",
      stock: 1,
      serie: "",
      categoria: ""
    },
    {
      id: 4,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      nombre: "Producto sin stock",
      descripcion: "Aca iría la descripción del producto.",
      stock: 0,
      serie: "",
      categoria: ""
    },
    {
      id: 5,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      nombre: "Producto",
      descripcion: "Aca iría la descripción del producto.",
      stock: 1,
      serie: "",
      categoria: ""
    },
    {
      id: 6,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      nombre: "Producto sin stock",
      descripcion: "Aca iría la descripción del producto.",
      stock: 0,
      serie: "",
      categoria: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
