import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaViajesComponent } from './tabla-viajes/tabla-viajes.component';
import { FormulariosViajesComponent } from './formularios-viajes/formularios-viajes.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaViajesComponent,
    FormulariosViajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
