import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  images = [`Valledupar.jpg`, `Manaure.jpg`, `plaza.jpg`, `valle1.jpg`, `valle2.jpg`, `manaure1.jpg`, `manaure2.jpg`,
  `manaure3.jpg`, `Aguachica.jpg`, `aguachica1.png`, `aguachica2.jpg`, `chimichagua1.png`, `chimichagua2.jpg`, `Chimichagua.jpg`,
   `pueblo1.jpg`, `pueblo2.jpg`, `Pueblo Bello.jpg`, `chiriguana1.jpg`, `chiriguana2.jpg`, `Chiriguana.jpg`].map((n) => `./assets/${n}`);
  constructor() { }

  ngOnInit() {
  }

}
