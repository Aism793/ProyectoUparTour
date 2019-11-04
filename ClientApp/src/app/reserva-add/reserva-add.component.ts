import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../services/reserva.service';
import { Reserva } from '../models/reserva';

@Component({
  selector: 'app-reserva-add',
  templateUrl: './reserva-add.component.html',
  styleUrls: ['./reserva-add.component.css']
})
export class ReservaAddComponent implements OnInit {
  
  constructor(private reservaService: ReservaService) { }
  reserva: Reserva;
  ngOnInit() {
    this.reserva={id:0, clienteid:0, estado:false, cantidadpersonas:0, fecha:"00/00/0000"};
  }
  
  add(){
    this.reservaService.addReserva(this.reserva)
    .subscribe(reserva => {
      alert('Se agregó una nueva reserva')
    });
  }
}