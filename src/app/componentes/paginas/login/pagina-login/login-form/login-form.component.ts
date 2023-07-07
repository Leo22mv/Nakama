import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnChanges {

  email: string = "";
  password: string = "";

  error: boolean = this.auth.error;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
  }

  login() {
    // for (let usuario of this.auth.listaUsuarios) {
    //   if ((usuario.email==this.email||usuario.username==this.email)&&usuario.password==this.password) {
    //     localStorage.setItem("token", "1");
    //     this.router.navigate(["/inicio"]);
    //   } else {
    //     this.error = true;
    //   }
    // }
    this.auth.login(this.email, this.password);
    this.error = this.auth.error;
  }
}
