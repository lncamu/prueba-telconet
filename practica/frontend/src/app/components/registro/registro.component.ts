import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  email: string = "";
  nombre: string = "";
  clave: string = "";

  constructor(public RegistroUsuarioService: RegistroService) { }

  ngOnInit(): void { }

  registro() {
    let usuario = {
      email: this.email, nombre: this.nombre, clave: this.clave
    }
    this.RegistroUsuarioService.registrarUsuario(usuario).subscribe(data => {
      if (data !== null) {
        alert("Usuario registrado correctamente");
      } else {
        alert("No se registró el usuario");
      }
    });
  }

}
