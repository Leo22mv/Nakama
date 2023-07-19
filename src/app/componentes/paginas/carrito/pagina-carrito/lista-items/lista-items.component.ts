import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { AuthService } from 'src/app/servicios/auth.service';
import { ListaProductosService } from 'src/app/servicios/lista-productos.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit, OnChanges {

  @Input() listaCarrito: IProducto[] = [];

  total: number = 0

  constructor(private auth: ListaProductosService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarTotal()
  }

  ngOnInit(): void {
    this.actualizarTotal()
  }

  actualizarTotal() {
    this.auth.sumarTotal(this.auth.listaCarrito);
    this.total = this.auth.total; 
  }

  recibirTotal(evento: number) {
    this.total = evento
  }

  actualizarThisTotal(total: number) {
    this.total = total;
  }

  submit() {
    this.auth.listaCarrito = this.listaCarrito;
  }
}
