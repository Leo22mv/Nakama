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

  // uri = "https://nakama-0.azurewebsites.net";
  // uri = "http://localhost:8080";
  // uri = "http://localhost:3000";
  uri = "https://nakama-b-n.onrender.com";

  constructor(private http: HttpClient, private router: Router) { 
    // this.obtener();
  }

  agregar(nombre: string, descripcion: string, urlFoto: string, precio: number, categoria: string, serie: string, stock: number) {
    this.http.post(this.uri + "/agregar", {nombre: nombre, descripcion: descripcion, urlFoto: urlFoto, precio: precio, categoria: categoria, serie: serie, stock: stock})
      .subscribe((resp:any) => {
        this.router.navigate(["admin"]);
      }, (err: any) => {
        if(err.status==500) {
          alert("Error")
        } else if (err.status==200) {
          this.router.navigate(["admin"]);
        }
        // alert("error")
        // console.log(err)
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

  eliminarProducto(id: number) {
    const url = `${this.uri}/productos/${id}`;
    console.log(url)
  
    this.http.delete(url).subscribe(
      () => {
        console.log('Producto eliminado correctamente');
      },
      (error) => {
        if (error.status==200) {
          console.log('Producto eliminado correctamente');
          this.router.navigate(["admin"])
        } else {
          console.log(error)
          alert("Error");
        }
      }
    );
  }
  
}
