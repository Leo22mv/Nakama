import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';
import { IProducto } from '../modelos/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  listaProductosTotal: any[] = []

  constructor(private prodServ: ProductosService) {
    this.prodServ.obtener().subscribe(
      data => {
        this.listaProductosTotal = data[0];
        // console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  listaCarrito: IProducto[] = [
    
  ];

  listaProductos: IProducto[] = [
    
  ];

  // listaUsuarios: IUsuario[] = [
  //   {
  //     id: 1,
  //     email: "g.leonel.m17@gmail.com",
  //     username: "Kbe",
  //     password: "Admin"
  //   },
  //   {
  //     id: 2,
  //     email: "a",
  //     username: "a",
  //     password: "a"
  //   },
  //   {
  //     id: 3,
  //     email: "A",
  //     username: "A",
  //     password: "A"
  //   }
  // ];

  total: number = 0;

  sumarTotal(lista: IProducto[]) {
    let totall: number = 0;
    for (let item of lista) {
      totall = totall + (item.precio*item.cantidad);
    }
    this.total = totall
  }
}
