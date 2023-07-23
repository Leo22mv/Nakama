import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  listaUsuarios: any = [];

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.listaUsuarios = this.auth.getUsuarios().subscribe(res => {
      this.listaUsuarios = res;
    })
  }

}
