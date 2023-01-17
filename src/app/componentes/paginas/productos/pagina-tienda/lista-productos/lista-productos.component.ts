import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
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
    precio: 5000,
    nombre: "Capa de Akatsuki",
    descripcion: "Atuendo característico de la organización criminal mas famosa del mundo.",
    stock: 1,
    serie: "Naruto",
    categoria: "ropa"
    },
    {
      id: 2,
      urlFoto: "../../../../../../assets/img/capamikasa2.png",
      precio: 3000,
      nombre: "Capa del cuerpo de exploración",
      descripcion: "Uniforme del cuerpo encargado de explorar fuera de las murallas y matar titanes.",
      stock: 1,
      serie: "Attack on titan (Shingeki no kyojin)",
      categoria: "ropa"
    },
    {
      id: 3,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 1,
      nombre: "Producto",
      descripcion: "Aca iría la descripción del producto.",
      stock: 1,
      serie: "",
      categoria: ""
    },
    {
      id: 4,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 1,
      nombre: "Producto sin stock",
      descripcion: "Aca iría la descripción del producto.",
      stock: 0,
      serie: "",
      categoria: ""
    },
    {
      id: 5,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 1,
      nombre: "Producto",
      descripcion: "Aca iría la descripción del producto.",
      stock: 1,
      serie: "",
      categoria: ""
    },
    {
      id: 6,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 1,
      nombre: "Producto sin stock",
      descripcion: "Aca iría la descripción del producto.",
      stock: 0,
      serie: "",
      categoria: ""
    }
  ]

  params: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => this.params = params['categoria']);

  }
}
