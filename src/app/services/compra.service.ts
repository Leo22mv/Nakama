import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  // uri = "http://localhost:3000";
  uri = "https://nakama-b-n.onrender.com";

  constructor(private http: HttpClient, private router: Router) { }

  compra(userID: number, total: number, details: any) {
    // console.log(details)
    this.http.post(this.uri + "/compra", {id_user: userID, total: total, compra: details}).subscribe((res: any) => {
      if (res.status==200) {
        // console.log("Compra creada correctamente");
        // this.router.navigate(["tienda"]);
      } else {
        // console.log(res);
      }
    },
    (error) => {
      // console.error(error);
      if (error.status==200) {
        console.log("Compra creada correctamente");
        this.router.navigate(["confirmacion"]);
      } else {
        alert("Error");
      }
    });
  }

  getCompras() {
    return this.http.get<any[]>(this.uri+"/compras")
  }
}
