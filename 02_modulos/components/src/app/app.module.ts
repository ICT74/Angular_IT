
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SharedModule,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
