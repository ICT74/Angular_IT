import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BindingComponent],
  exports: [
    BindingComponent
  ]
})
export class SamplesModule { }