import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BindingComponent],
  exports: [
    BindingComponent
  ]
})
export class SamplesModule { }
