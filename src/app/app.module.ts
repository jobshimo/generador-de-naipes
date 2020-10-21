import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaipeComponent } from './components/naipe/naipe.component';
import { MostrarNaipeComponent } from './components/mostrar-naipe/mostrar-naipe.component';
import { FormsModule } from '@angular/forms';
import { DorsoComponent } from './components/dorso/dorso.component';

@NgModule({
  declarations: [AppComponent, NaipeComponent, MostrarNaipeComponent, DorsoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
