import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-r',
  templateUrl: './titulo-r.component.html',
  styleUrls: ['./titulo-r.component.css']
})
export class TituloRComponent implements OnInit {

  titulo: string = "Registrarse";

  constructor() { }

  ngOnInit(): void {
  }

}
