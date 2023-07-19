import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-ver-compras',
  templateUrl: './ver-compras.component.html',
  styleUrls: ['./ver-compras.component.css']
})
export class VerComprasComponent implements OnInit {

  listaCompras: any[] = [];

  constructor(private compraServ: CompraService) { }

  ngOnInit(): void {
    this.compraServ.getCompras().subscribe(res=>{
      this.listaCompras = res;
    })
  }

}
