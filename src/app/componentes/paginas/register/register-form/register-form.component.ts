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
    // switch (error) {
    //   case "username":
        
    //   break
    //   case "email":
    //     this.errorActual = "email"
    //   break
    //   case "ninguno":
    //     this.errorActual = "ninguno"
    //   break
    //   default:
    //     this.errorActual = undefined
    //     break
    // }
    if (error=="username") {
      this.errorActual = "username"
    } else if (error=="email") {
      this.errorActual = "email"
    } else {
      this.errorActual = "ninguno"
    }
  }

  registrarse() {
    for (let usuario of this.auth.listaUsuarios) {

      // switch (usuario.email) {
      //   case this.email:
      //     this.error("email");
      //     break
      //   default:
      //     switch (usuario.username) {
      //       case this.username:
      //         this.error("username");
      //         break
      //       default:
      //         this.auth.listaUsuarios.push(
      //           {
      //             id: (this.auth.listaUsuarios.length)+1,
      //             email: this.email,
      //             username: this.username,
      //             password: this.password
      //           }
      //         )
      //         this.error("ninguno");
      //         break
      //     }
      //     break
      // }

      if (usuario.username==this.username) {
        this.error("username");
      } else if (usuario.email==this.email) {
        this.error("email");
      } else {
        this.auth.listaUsuarios.push(
          {
            id: (this.auth.listaUsuarios.length)+1,
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
