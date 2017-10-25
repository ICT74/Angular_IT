import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent,
    CabezaComponent,
    PieComponent],
  exports: [
    //LogoComponent, //lo quitamos xq lo llamamos ahora desde la cabecera y esta en el mismo modulo
    CabezaComponent,
    PieComponent
  ]
})
export class SharedModule { }
