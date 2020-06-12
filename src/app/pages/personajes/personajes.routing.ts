import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes.component';
import { ListaComponent } from './components/lista/lista.component';
import { NgModule } from '@angular/core';
import { DetalleComponent } from './components/detalle/detalle.component';


const routes: Routes = [
    {path: '', component: PersonajesComponent,
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
export class PersonajesRoutingModule { }
