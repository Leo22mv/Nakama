import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  loading: boolean = false;

  codigo: number = 0;

  uri = "";

  successCreated: boolean = false;

  // registroForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  //   this.registroForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  // }

  constructor (private authService: AuthService, private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.successCreated = false
    scrollTo({
      behavior: 'smooth',
      top: document.body.getBoundingClientRect().bottom
    })
    if (this.username.length>0&&this.password.length>0&&this.email.length>0) {
      this.loading = true;
      // this.authService.register(this.email, this.username, this.password)
      this.http.post(this.uri + "/registrarse", {email: this.email, username: this.username, password: this.password})
      .subscribe((resp:any) => {
        this.successCreated = true;
        scrollTo({
          behavior: 'smooth',
          top: document.body.getBoundingClientRect().bottom
        })
      }, (err: any) => {
        this.loading = false;
        // alert("error")
        if (err.status==200) {
          this.successCreated = true;
          scrollTo({
            behavior: 'smooth',
            top: document.body.getBoundingClientRect().bottom
          })
        } else if (err.status==401){
          this.error = true;
          this.codigo = 401
        }
        // console.log(err)
      })
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
      // this.actualizarError()
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
    this.uri = this.authService.uri;
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