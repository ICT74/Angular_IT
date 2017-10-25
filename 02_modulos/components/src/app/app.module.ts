
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modulos de la app
import { SharedModule } from './shared/shared.module';
import { SamplesModule } from './samples/samples.module';
//Componentes
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
