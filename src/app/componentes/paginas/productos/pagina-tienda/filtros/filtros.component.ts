import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filtrarANaruto(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        serie: "Naruto"
      }
    }
    this.router.navigate(["/tienda"], navigationExtras)
  }

  filtrarAShingeki(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        serie: "Attack on titan (Shingeki no kyojin)"
      }
    }
    this.router.navigate(["/tienda"], navigationExtras)
  }

}
