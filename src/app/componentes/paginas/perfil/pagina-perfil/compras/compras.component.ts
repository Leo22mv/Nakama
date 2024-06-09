import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  id: any;
  listaCompras: any[] = [];

  loading: boolean = true;

  empty: boolean = false;

  constructor(private compraServ: CompraService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("token");
    this.compraServ.getCompras().subscribe(res=>{
      // console.log(res)
      for (let compra of res) {
        if (compra.id_user==this.id) {
          this.listaCompras.push(compra);
        }
      }
      
      if (this.listaCompras.length < 1) {
        this.empty = true;
      }

      this.loading = false;
    })
  }

}
