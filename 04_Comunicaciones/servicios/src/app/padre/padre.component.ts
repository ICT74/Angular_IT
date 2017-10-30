import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public sClave: string;
public aLibros: Array<string>;
  constructor() { }

  ngOnInit() {
    this.sClave = '';
  this.aLibros = [];
  }

  btnBuscar(){

  }
}
