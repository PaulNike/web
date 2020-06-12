import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares.component';

import { NgModule } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';
import { DetalleComponent } from './components/detalle/detalle.component';


const routes: Routes = [
    {path: '', component: LugaresComponent,
        children: [
            {path: 'lista', component: ListaComponent},
            {path: 'detalle/:id', component: DetalleComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LugaresRoutingModule { }