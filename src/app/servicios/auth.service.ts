import { Injectable } from '@angular/core';
import { IUsuario } from '../modelos/iusuario';
import { IProducto } from '../modelos/producto-interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // uri = "https://nakama-0.azurewebsites.net";
  // uri = "http://localhost:8080";
  // uri = "http://localhost:3000";
  uri = "https://nakama-b-n.onrender.com";

  error = false;
  errorRegister= false;
  codigo: any = 0;
  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  register(email: string, username: string, password: string) {
    this.http.post(this.uri + "/registrarse", {email: email, username: username, password: password})
      .subscribe((resp:any) => {
        this.router.navigate(["login"]);
      }, (err: any) => {
        // alert("error")
        if (err.status==200) {
          this.router.navigate(["login"]);
        } else if (err.status==401){
          this.errorRegister = true;
          this.codigo = 401
        }
        // console.log(err)
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
          // this.router.navigate(["tienda"])
          // console.log("Respuesta:"+response)
          // localStorage.setItem("token", response);
          this.error = false;
          this.router.navigate(["tienda"])
          localStorage.setItem("token", response.toString())
          if (username=="Chi") {
            localStorage.setItem("admin", "1")
          }
        },
        (err: any) => {
          // console.log(err)
          if (err.status==200) {
            // respuesta = false
          } else {
            this.error = true;
            this.codigo = err.status;
            // respuesta = true
          }
        }
      )
      // this.error = true;
      // let respuesta: boolean;
      // return respuesta;
  }  


  getUsuario(): Observable<any> {
    // if (id!=null) {
      return this.http.get(this.uri + "/usuario/" + localStorage.getItem("token"));
    // }
  }
}
