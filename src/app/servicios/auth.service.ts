import { Injectable } from '@angular/core';
import { IUsuario } from '../modelos/iusuario';
import { IProducto } from '../modelos/producto-interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = "https://nakama-0.azurewebsites.net";
  error = false;

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, username: string, password: string) {
    this.http.post(this.uri + "/registrarse", {email: email, username: username, password: password})
      .subscribe((resp:any) => {
        this.router.navigate(["login"]);
      }, (err: any) => {
        // alert("error")
        this.error = true;
      })
      // console.log(this.uri)
  }

  // login(username: string, password: string) {
  //   this.http.post(this.uri + "/login", {username: username, password: password})
  //     .subscribe((resp: any) => {
  //       this.router.navigate(["tienda"])
  //       localStorage.setItem("token", "1")
  //     })
  // }

  login(username: string, password: string) {
    this.http.post(this.uri + "/login", {username: username, password: password})
      .subscribe(
        response => {
          this.router.navigate(["tienda"])
            localStorage.setItem("token", "1")
        },
        error => {
          console.log(error)
          if (error.status==200) {
            this.router.navigate(["tienda"])
            localStorage.setItem("token", "1")
            // respuesta = false
          } else {
            this.error = true;
            // respuesta = true
          }
        }
      )
      // let respuesta: boolean;
      // return respuesta;
  }

  listaCarrito: IProducto[] = [
    
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
      totall = totall + item.precio;
    }
    this.total = totall
  }

  
}
