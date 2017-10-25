import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BindingComponent implements OnInit {
public sNombre: string;
nEdad: number;
  constructor() { }

  ngOnInit() {
    this.sNombre = "nombre";
    this.nEdad=20;
  }
  btnBorrar() {
    this.sNombre='';
    
  }
}
