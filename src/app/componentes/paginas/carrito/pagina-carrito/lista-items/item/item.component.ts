import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/modelos/producto-interface';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() index: number = -1;

  @Input() item: IProducto = {
    id: 0,
    urlFoto: '',
    precio: 0,
    nombre: '',
    descripcion: '',
    serie: '',
    stock: 0,
    categoria: ''
  }

  @Output() totalEmit: EventEmitter<number> = new EventEmitter<number>();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  eliminarItem() {
    this.auth.listaCarrito.splice(this.index, 1)

    this.auth.sumarTotal(this.auth.listaCarrito)

    this.totalEmit.emit(this.auth.total);
  }

}
