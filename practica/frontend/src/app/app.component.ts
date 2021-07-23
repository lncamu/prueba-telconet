import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Proyecto Angular';
  description = '';
  constructor(private http: HttpClient, public router: Router) { }

  ngOnInit() {

  }

  cerrarSesion() {
    localStorage.removeItem("sesion")
    this.router.navigate(["/login"])
  }
}