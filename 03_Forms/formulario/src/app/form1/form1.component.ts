import { Component, OnInit, ViewChild } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
interface Departamento {
  nombre: string;
  codigo: string | number;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})



export class Form1Component implements OnInit {

user: Usuario;
impresoraSel: string;
aImpresoras: Array<string>;
isClaro: boolean;
isColor: boolean;
aDepartamentos: Array<Departamento>;
departamentoSel: Departamento;
@ViewChild('myForm') formLocal: any;

  constructor() { }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', phoneNumber: ''};
    this.aImpresoras = [ 'hp', 'Canon', 'lexmart'];
    this.isClaro = false;
    this.aDepartamentos = [
       {nombre: 'Marketing', codigo: 22},
       {nombre: 'Informatica', codigo: 21},
       {nombre: 'Ventas', codigo: '26T'}
    ];
  }

  avisarPrint () {
      console.log(this.isColor);
  }

  avisarDepartamento () {
    console.log(this.departamentoSel);
  }
  borrar () {
    console.log('borrar');
    this.formLocal.reset();
  }
  enviar () {
    console.log(this.formLocal);
  }
}
