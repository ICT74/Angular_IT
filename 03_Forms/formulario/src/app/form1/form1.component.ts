import { Component, OnInit } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  phoneNumber: string;
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

  constructor() { }

  ngOnInit() {
    this.user = {firstName: '', lastName: '', phoneNumber: ''};
    this.aImpresoras = [ 'hp', 'Canon', 'lexmart'];
    this.isClaro = false;
  }

}
