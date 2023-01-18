import { Injectable } from '@angular/core';
import { IUsuario } from '../modelos/iusuario';
import { IProducto } from '../modelos/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  listaCarrito: IProducto[] = [
    {
      id: 1,
      urlFoto: "../../../../../../assets/img/capa-akatsuki2.png",
      precio: 5000,
      nombre: "Capa de Akatsuki",
      descripcion: "Atuendo característico de la organización criminal mas famosa del mundo.",
      stock: 1,
      serie: "Naruto",
      categoria: "ropa"
    }
  ];

  listaUsuarios: IUsuario[] = [
    {
      id: 1,
      email: "g.leonel.m17@gmail.com",
      username: "Kbe",
      password: "Admin"
    },
    {
      id: 2,
      email: "a",
      username: "a",
      password: "a"
    },
    {
      id: 3,
      email: "A",
      username: "A",
      password: "A"
    }
  ];

  total: number = 0;

  sumarTotal(lista: IProducto[]) {
    let totall: number = 0;
    for (let item of lista) {
      totall = totall + item.precio;
    }
    this.total = totall
  }

  constructor() { }

  
}
