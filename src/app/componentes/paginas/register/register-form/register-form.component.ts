import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  id: number | undefined;
  email: string = "";
  username: string = "";
  password: string = "";

  errorActual: string | undefined;


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  error(error: string) {
    switch (error) {
      case "email":
        this.errorActual = "email"
      break
      case "username":
        this.errorActual = "username"
      break
      case "ninguno":
        this.errorActual = "ninguno"
      break
    }
  }

  registrarse() {
    for (let usuario of this.auth.listaUsuarios) {
      if (usuario.email==this.email) {
        this.error("email");
      } else if (usuario.username==this.username) {
        this.error("username");
      } else {
        this.auth.listaUsuarios.push(
          {
            id: (this.auth.listaUsuarios.length--),
            email: this.email,
            username: this.username,
            password: this.password
          }
        )
        this.error("ninguno");
      }
    }
  }

}
