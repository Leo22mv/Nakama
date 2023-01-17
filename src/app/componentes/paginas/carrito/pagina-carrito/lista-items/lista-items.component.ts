import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  @Input() listaCarrito: IProducto[] = []

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
  }

}
