import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-carrito-btn',
  templateUrl: './carrito-btn.component.html',
  styleUrls: ['./carrito-btn.component.css']
})
export class CarritoBtnComponent implements OnInit {

  listaCarrito: IProducto[] = [];

  logged: boolean | undefined;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.logged = true
    } else {
      this.logged = false
    }
    // this.listaCarrito = this.auth.listaCarrito
  }

}
