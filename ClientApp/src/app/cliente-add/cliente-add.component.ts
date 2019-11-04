import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {
  constructor(private clienteService: ClienteService) { }
  cliente: Cliente;
  ngOnInit() {
    this.cliente={id:0, identificacion:0, nombre:'', apellidos:'', correo:'', contrasena:'', direccion:'', telefono:0};
  }
  
  add(){
    this.clienteService.addCliente(this.cliente)
    .subscribe(cliente => {
      alert('Se agregó un nuevo cliente')
    });
  }
}
