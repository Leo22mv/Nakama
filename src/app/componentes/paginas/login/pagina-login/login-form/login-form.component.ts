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

  boton: string = "btn btn-dark btn-lg"

  // constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) {
  constructor(private authService: AuthService, private router: Router) {
    // this.form = this.formBuilder.group({
    //   username:["",[]],
    //   password["",[]]
    // })
   }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
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

    // this.authService.login(this.email, this.password);
    this.actualizarBoton()
    this.actualizarError()

    // localStorage.setItem("token", "1")
    localStorage.setItem("admin", "1")
    // this.router.navigate(["inicio"])
  }

  actualizarBoton() {
    this.boton = "btn btn-success btn-lg"
    setTimeout(() => {
      this.boton = "btn btn-dark btn-lg"
    }, 2000);
  // this.boton = this.boton + " disabled"
  }

  actualizarError() {
    this.error = this.authService.error;
    // this.boton = "btn btn-dark btn-lg";
    // alert("das")
  }
}
