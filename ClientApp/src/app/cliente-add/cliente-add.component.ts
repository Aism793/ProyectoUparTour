import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente';
import {ReservaAddComponent} from '../reserva-add/reserva-add.component';
@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {
  constructor(private clienteService: ClienteService) { }
  cliente: Cliente;
  reserva: ReservaAddComponent;
  ngOnInit() {
    this.cliente={identificacion:'', nombre:'', apellidos:'', correo:'', contrasena:'', direccion:'', telefono:0};
  }
  
  add(){
    this.clienteService.addCliente(this.cliente)
    .subscribe(cliente => {
      alert('Se agregó un nuevo cliente')
    });
    this.reserva.recibir(this.cliente.identificacion);
  }
}
