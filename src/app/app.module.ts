import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MecanicosComponent } from './components/layout/mecanicos/mecanicos.component';
import { ClientesComponent } from './components/layout/clientes/clientes.component';
import { CocheComponent } from './components/layout/coche/coche.component';

@NgModule({
  declarations: [
    AppComponent,
    MecanicosComponent,
    ClientesComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
