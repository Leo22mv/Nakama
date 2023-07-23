import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnChanges {

  // form: FormGroup;

  email: string = "";
  password: string = "";

  error: boolean = false;
  codigo: any = 0;

  loading: boolean = false;

  boton: string = "btn btn-dark btn-lg";

  errorValidacion = false;

  uri = "";

  // constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    // this.form = this.formBuilder.group({
    //   username:["",[]],
    //   password["",[]]
    // })
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.codigo);    
  }

  ngOnInit(): void {
    // console.log(this.codigo);
    this.uri = this.authService.uri;
  }

  onSubmit() {
    if (this.password.length>0&&this.email.length>0) {
      this.loading = true;
      // for (let usuario of this.auth.listaUsuarios) {
      //   if ((usuario.email==this.email||usuario.username==this.email)&&usuario.password==this.password) {
      //     localStorage.setItem("token", "1");
      //     this.router.navigate(["/inicio"]);
      //   } else {
      //     this.error = true;
      //   }
      // }

      // this.authService.login(this.email, this.password);

      // this.codigo = this.authService.codigo

      this.http.post(this.uri + "/login", {username: this.email, password: this.password})
      .subscribe(
        response => {
          // this.router.navigate(["tienda"])
          // console.log("Respuesta:"+response)
          // localStorage.setItem("token", response);
          this.error = false;
          this.loading = false;
          this.router.navigate(["tienda"])
          localStorage.setItem("token", response.toString())
          if (this.email=="Chi") {
            localStorage.setItem("admin", "1")
          }
        },
        (err: any) => {
          // console.log(err)
          if (err.status==200) {
            // respuesta = false
          } else {
            this.error = true;
            this.codigo = err.status;
            this.loading = false;
            // respuesta = true
          }
        }
      )

      // this.actualizarBoton()
      
      // console.log(this.codigo);

      // this.actualizarError()

      // localStorage.setItem("token", "1")
      // localStorage.setItem("admin", "1")
      // this.router.navigate(["inicio"])
      this.errorValidacion = false
      this.error = false;
      // this.codigo = 0;
    } else {
      this.errorValidacion = true
    }
  }

  actualizarBoton() {
    if (this.boton=="btn btn-dark btn-lg disabled") {
      this.boton = "btn btn-dark btn-lg"
    } else {
      this.boton = "btn btn-dark btn-lg disabled"
    }
    // setTimeout(() => {
    //   this.boton = "btn btn-dark btn-lg"
    // }, 2000);
  // this.boton = this.boton + " disabled"
  }

  actualizarError() {
    // this.error = this.authService.error;
    // this.boton = "btn btn-dark btn-lg";
    // alert("das")
    if (this.codigo==401) {
      this.actualizarBoton()
    }
  }
}
