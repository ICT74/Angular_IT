import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
public sNombre: string;
  constructor() { }

  ngOnInit() {
    this.sNombre = "nombre";
  }
  btnBorrar() {
    this.sNombre='';
  }
}
