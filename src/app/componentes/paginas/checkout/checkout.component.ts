import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { ListaProductosService } from 'src/app/servicios/lista-productos.service';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: number = 0;
  lista: any[] = [];
  // lista: any[] = [
  //   {
  //     cantidad: 1,
  //     categoria: "1",
  //     descripcion: "1",
  //     id: 1,
  //     nombre: "1",
  //     precio: 1,
  //     serie: "1",
  //     stock: 1,
  //     urlFoto: "../../../../../../assets/img/isotipo.png"
  //   },
  //   {
  //     cantidad: 1,
  //     categoria: "2",
  //     descripcion: "2",
  //     id: 2,
  //     nombre: "2",
  //     precio: 2,
  //     serie: "2",
  //     stock: 2,
  //     urlFoto: "../../../../../../assets/img/isotipo.png"
  //   }
  // ];
  details: any[] = [];
  id: any = "";

  constructor(private lpServ: ListaProductosService, private compraServ: CompraService, private prodServ: ProductosService) { }

  ngOnInit(): void {
    this.lista = this.lpServ.listaCarrito;
    console.log(this.lista);
    this.total = this.lpServ.total;
    this.prodServ.obtener().subscribe(res => {
      for (let item of this.lista) {
        for(let prod of res) {
          console.log(prod)
          if (item.nombre==prod.nombre) {
            this.details.push({id_producto: prod.id_producto, cantidad: item.cantidad})
          }
        }
      };
    })
    console.log(this.details)
    this.id = localStorage.getItem("token")
  }

  confirmar() {
    this.compraServ.compra(this.id, this.total, this.details);
  }
}
