import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { IProducto } from '../../../../../modelos/producto-interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnChanges {

  listaProductosTotal: IProducto[] = [
    {
    id: 1,
    urlFoto: "../../../../../../assets/img/capa-akatsuki2.png",
    precio: 5000,
    nombre: "Capa de Akatsuki",
    descripcion: "Atuendo característico de la organización criminal mas famosa del mundo.",
    stock: 1,
    serie: "Naruto",
    categoria: "ropa",
    activo: false,
    cantidad: 1
    },
    {
      id: 2,
      urlFoto: "../../../../../../assets/img/capamikasa2.png",
      precio: 3000,
      nombre: "Capa del cuerpo de exploración",
      descripcion: "Uniforme del cuerpo encargado de explorar fuera de las murallas y matar titanes.",
      stock: 1,
      serie: "Attack on titan (Shingeki no kyojin)",
      categoria: "ropa",
      activo: false,
      cantidad: 1
    },
    {
      id: 3,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 1,
      nombre: "Producto",
      descripcion: "Aca iría la descripción del producto.",
      stock: 1,
      serie: "",
      categoria: "",
      activo: false,
      cantidad: 1
    },
    {
      id: 4,
      urlFoto: "../../../../../../assets/img/isotipo.png",
      precio: 50,
      nombre: "Producto sin stock",
      descripcion: "Aca iría la descripción del producto.",
      stock: 0,
      serie: "",
      categoria: "",
      activo: false,
      cantidad: 1
    }
  ]

  listaProductos: IProducto[] = this.listaProductosTotal

  listaProductosOrdenada: IProducto[] = this.listaProductos

  agregado: boolean = false;

  // params: string = "Todas";
  // params2: string | undefined;

  @Input() ordenActual: string | undefined;
  @Input() categoriaActual: string | undefined;

  constructor(private route: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarCategoria();
    this.ordenar();
  }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => this.params = params['categoria']);
    // this.route.queryParams.subscribe(params => this.params2 = params['serie']);

  }



  mostrarSucces(producto: IProducto) {
    producto.activo = true;
  }

  ordenar() {
    switch (this.ordenActual) {
      case "precioAscendente":
        this.listaProductos = this.listaProductosOrdenada
        this.listaProductosOrdenada = this.listaProductos.sort((a,b) => {
        if (a.precio < b.precio) {
          return -1;
        } else if (a.precio > b.precio){
          return 1;
        }
        return 0;
      })
      break

      case "precioDescendente":
        this.listaProductos = this.listaProductosOrdenada
        this.listaProductosOrdenada = this.listaProductos.sort((a,b) => {
          if (a.precio < b.precio) {
            return 1;
          } else if (a.precio > b.precio){
            return -1;
          }
          return 0;
        })
      break
    }
  }

  actualizarCategoria() {
    switch (this.categoriaActual) {
      case "todas":
        this.listaProductos = this.listaProductosTotal;
        this.listaProductosOrdenada = this.listaProductos
      break

      case "ropa":
        this.listaProductos = this.listaProductosTotal.filter(producto => producto.categoria=="ropa")
        this.listaProductosOrdenada = this.listaProductos
      break
    }
  }

}
