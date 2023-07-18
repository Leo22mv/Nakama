import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado: string | null = localStorage.getItem("token");
  admin: string | null = localStorage.getItem("admin");

  constructor() { }

  ngOnInit(): void {
    
  }

}
