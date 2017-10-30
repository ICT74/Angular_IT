import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Modulos de la app
import { SharedModule } from './shared/shared.module';
import { SamplesModule } from './samples/samples.module';
//Componentes
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

import { ServicesModule} from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    SamplesModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
