import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresComponent } from './lugares.component';
import { ListaComponent } from './components/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { LugaresRoutingModule } from './lugares.routing';
import { DetalleComponent } from './components/detalle/detalle.component';



@NgModule({
  declarations: [LugaresComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    HttpClientModule
  ]
})
export class LugaresModule { }
