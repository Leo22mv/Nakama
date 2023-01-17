import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logged: boolean | undefined;

  constructor() { }

  ngOnInit(): void {

    if (localStorage.getItem("token")) {
      this.logged = true
    } else {
      this.logged = false
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

}
