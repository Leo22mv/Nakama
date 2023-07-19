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

  boton: string = "btn btn-dark btn-lg"

  // constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
  constructor(private authService: AuthService, private router: Router) {
    // this.form = this.formBuilder.group({
    //   username:["",[]],
    //   password["",[]]
    // })
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.codigo);    
  }

  ngOnInit(): void {
    console.log(this.codigo);
  }

  onSubmit() {
    // for (let usuario of this.auth.listaUsuarios) {
    //   if ((usuario.email==this.email||usuario.username==this.email)&&usuario.password==this.password) {
    //     localStorage.setItem("token", "1");
    //     this.router.navigate(["/inicio"]);
    //   } else {
    //     this.error = true;
    //   }
    // }

    this.authService.login(this.email, this.password);

    this.codigo = this.authService.codigo

    // this.actualizarBoton()
    
    console.log(this.codigo);

    // this.actualizarError()

    // localStorage.setItem("token", "1")
    // localStorage.setItem("admin", "1")
    // this.router.navigate(["inicio"])
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
