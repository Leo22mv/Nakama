import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, toArray } from 'rxjs/operators';
import { IProducto } from '../modelos/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  listaProductos: any[] = [];

  activo: number | undefined

  uri = "https://nakama-0.azurewebsites.net";
  // uri = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { 
    // this.obtener();
  }

  agregar(nombre: string, descripcion: string, urlFoto: string, precio: number, categoria: string, serie: string, stock: number) {
    this.http.post(this.uri + "/agregar", {nombre: nombre, descripcion: descripcion, urlFoto: urlFoto, precio: precio, categoria: categoria, serie: serie, stock: stock})
      .subscribe((resp:any) => {
        this.router.navigate(["admin"]);
      }, (err: any) => {
        alert("error")
        // this.error = true;
      })
      // console.log(this.uri)
  }

  obtener() {
    // return this.http.get<any[]>(this.uri + "/productos").pipe(
    //   map (data => {
    //     return data as IProducto[];
    //   }), toArray()
    // )

    return this.http.get<any[]>(this.uri + "/productos")

    // .subscribe(data => {
    //   this.listaProductos = data
    // });
  }
}
