import { Injectable } from '@angular/core';
import { IUsuario } from '../modelos/iusuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  listaUsuarios: IUsuario[] = [
    {
      id: 1,
      email: "g.leonel.m17@gmail.com",
      username: "Kbe",
      password: "Admin"
    }
  ];

  constructor() { }
}
