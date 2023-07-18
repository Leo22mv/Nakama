import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

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
}
