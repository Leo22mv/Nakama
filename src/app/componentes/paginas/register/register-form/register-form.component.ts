import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  username: string = "";
  password: string = "";
  email: string = "";

  boton: string = "btn btn-dark btn-lg"

  error: boolean = false
  errorValidacion: boolean = false

  codigo: number = 0;

  // registroForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  //   this.registroForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  constructor (private authService: AuthService) {}

  onSubmit() {
    if (this.username.length>0&&this.password.length>0&&this.email.length>0) {
      this.authService.register(this.email, this.username, this.password)
      this.errorValidacion = false;
      // if (this.registroForm.invalid) {
    //     return;
    //   }

    //   const formData = this.registroForm.value;

    //   this.http.post('/api/registro', formData)
    //     .subscribe(
    //       (response) => {
    //         // Manejar la respuesta del servidor
    //       },
    //       (error) => {
    //         // Manejar errores de la solicitud
    //       }
    //     );
      // this.actualizarBoton()
      this.actualizarError()
      this.codigo = this.authService.codigo;
      console.log(this.codigo)
    } else {
      this.errorValidacion = true;
    }
  }

  actualizarBoton() {
    this.boton = "btn btn-dark btn-lg disabled"
    // setTimeout(() => {
    //   this.boton = "btn btn-dark btn-lg"
    // }, 2000);
  }

  actualizarError() {
    this.error = this.authService.errorRegister
    if (this.error) {
      this.boton = "btn btn-dark btn-lg";
    }
  }

  // id: number | undefined;
  // email: string = "";
  // username: string = "";
  // password: string = "";

  // errorActual: string | undefined;


  // constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }



  // error(error: string) {
  //   // switch (error) {
  //   //   case "username":
        
  //   //   break
  //   //   case "email":
  //   //     this.errorActual = "email"
  //   //   break
  //   //   case "ninguno":
  //   //     this.errorActual = "ninguno"
  //   //   break
  //   //   default:
  //   //     this.errorActual = undefined
  //   //     break
  //   // }
  //   if (error=="username") {
  //     this.errorActual = "username"
  //   } else if (error=="email") {
  //     this.errorActual = "email"
  //   } else {
  //     this.errorActual = "ninguno"
  //   }
  // }

  // registrarse() {
  //   for (let usuario of this.auth.listaUsuarios) {

  //     // switch (usuario.email) {
  //     //   case this.email:
  //     //     this.error("email");
  //     //     break
  //     //   default:
  //     //     switch (usuario.username) {
  //     //       case this.username:
  //     //         this.error("username");
  //     //         break
  //     //       default:
  //     //         this.auth.listaUsuarios.push(
  //     //           {
  //     //             id: (this.auth.listaUsuarios.length)+1,
  //     //             email: this.email,
  //     //             username: this.username,
  //     //             password: this.password
  //     //           }
  //     //         )
  //     //         this.error("ninguno");
  //     //         break
  //     //     }
  //     //     break
  //     // }

  //     if (usuario.username==this.username) {
  //       this.error("username");
  //     } else if (usuario.email==this.email) {
  //       this.error("email");
  //     } else {
  //       this.auth.listaUsuarios.push(
  //         {
  //           id: (this.auth.listaUsuarios.length)+1,
  //           email: this.email,
  //           username: this.username,
  //           password: this.password
  //         }
  //       )
  //       this.error("ninguno");
  //     }
  //   }
  // }
}