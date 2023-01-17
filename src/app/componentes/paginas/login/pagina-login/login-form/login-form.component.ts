import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  error: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    for (let usuario of this.auth.listaUsuarios) {
      if ((usuario.email==this.email||usuario.username==this.email)&&usuario.password==this.password) {
        sessionStorage.setItem("token", "1");
        this.router.navigate(["/inicio"]);
      } else {
        this.error = true;
      }
    }
  }

}
