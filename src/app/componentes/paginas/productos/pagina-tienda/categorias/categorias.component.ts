import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filtrarCategoria() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        categoria: "ropa"
      }
    }

    this.router.navigate(["/tienda"], navigationExtras)
  }

}
