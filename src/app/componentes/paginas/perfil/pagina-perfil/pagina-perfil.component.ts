import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-pagina-perfil',
  templateUrl: './pagina-perfil.component.html',
  styleUrls: ['./pagina-perfil.component.css']
})
export class PaginaPerfilComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.auth.getUsuario()
      .subscribe(res => {
        this.user = res;
      });

    // this.http.get("http://localhost:3000"+"/usuario/"+localStorage.getItem("token")).subscribe(res => {
    //   this.user = res;
    //   console.log(res);
    // })

  }

}
