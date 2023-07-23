import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { IProducto } from '../../../../../modelos/producto-interface';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ListaProductosService } from 'src/app/servicios/lista-productos.service';
import { HttpClient } from '@angular/common/http';
import { map, toArray } from 'rxjs';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit, OnChanges {

  filtroActivo: boolean = false;

  // @Input() listaProductosTotal: any[] = this.listaProdService.listaProductosTotal;
  listaProductosTotal: any[] = [];
  // [
  // listaProductosTotal: any = [
    // {
    // id: 1,
    // urlFoto: "../../../../../../assets/img/capa-akatsuki2.png",
    // precio: 5000,
    // nombre: "Capa de Akatsuki",
    // descripcion: "Atuendo característico de la organización criminal mas famosa del mundo.",
    // stock: 1,
    // serie: "Naruto",
    // categoria: "ropa",
    // activo: false,
    // cantidad: 1
    // },
    // {
    //   id: 2,
    //   urlFoto: "../../../../../../assets/img/capamikasa2.png",
    //   precio: 3000,
    //   nombre: "Capa del cuerpo de exploración",
    //   descripcion: "Uniforme del cuerpo encargado de explorar fuera de las murallas y matar titanes.",
    //   stock: 1,
    //   serie: "Attack on titan (Shingeki no kyojin)",
    //   categoria: "ropa",
    //   activo: false,
    //   cantidad: 1
    // },
    // {
    //   id: 3,
    //   urlFoto: "../../../../../../assets/img/isotipo.png",
    //   precio: 1,
    //   nombre: "Producto",
    //   descripcion: "Aca iría la descripción del producto.",
    //   stock: 1,
    //   serie: "",
    //   categoria: "otros",
    //   activo: false,
    //   cantidad: 1
    // },
    // {
    //   id: 4,
    //   urlFoto: "../../../../../../assets/img/isotipo.png",
    //   precio: 50,
    //   nombre: "Producto sin stock",
    //   descripcion: "Aca iría la descripción del producto.",
    //   stock: 0,
    //   serie: "",
    //   categoria: "otros",
    //   activo: false,
    //   cantidad: 1
    // }
  // ]

  listaProductos: any[] = this.listaProductosTotal

  listaProductosOrdenada: any[] = this.listaProductos

  agregado: boolean = false;

  loading: boolean = false;
  error: boolean = false;

  // params: string = "Todas";
  // params2: string | undefined;

  @Input() ordenActual: string | undefined;
  @Input() categoriaActual: string | undefined;

  constructor(private route: ActivatedRoute, private prodServ: ProductosService, private listaProdService: ListaProductosService, private http: HttpClient) {
    // this.getProductos();
    this.actualizarCategoria();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.getProductos();
    this.actualizarCategoria();
    this.ordenar();
  }

  ngOnInit(): void {

    this.loading = true

    this.filtroActivo = false;

    // this.route.queryParams.subscribe(params => this.params = params['categoria']);
    // this.route.queryParams.subscribe(params => this.params2 = params['serie']);
    this.getProductos();
    // this.http.get<any[]>("http://localhost:8080/productos").subscribe(data => {
    //   this.listaProductosTotal = data as IProducto[];
    // });

    // this.listaProductosOrdenada = this.listaProductosTotal;

  }

  getProductos() {
    this.prodServ.obtener().subscribe(res=> {
      this.loading = false;
      this.listaProductosTotal = res;
      this.listaProductosOrdenada = res;
    })

    // this.prodServ.obtener().subscribe(
    //   data => {
    //     this.listaProductosTotal = data[0];
    //     // console.log(data)
    //   },
    //   error => {
    //     alert("Error")
    //   }
    // )
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
    this.filtroActivo = true;
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

      case "otros":
        this.listaProductos = this.listaProductosTotal.filter(producto => producto.categoria=="otros")
        this.listaProductosOrdenada = this.listaProductos
      break
    }
    this.filtroActivo = true;
  }

}
