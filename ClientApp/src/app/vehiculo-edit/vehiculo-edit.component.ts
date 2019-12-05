import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../services/vehiculo.service';
import { Vehiculo } from '../models/vehiculo';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  vehiculo:Vehiculo;
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = +this.route.snapshot.paramMap.get('placa');
    this.vehiculoService.get(id).subscribe(hero=>this.vehiculo=hero);
  }
  update(): void{
    this.vehiculo= this.registerForm.value;
    this.vehiculoService.update(this.vehiculo).subscribe(()=>this.goBack());
  }
  delete(): void{
    this.vehiculoService.delete(this.vehiculo).subscribe(()=>this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.update();
  }
  onReset(){
  this.submitted = false;
  this.registerForm.reset();
  }
}