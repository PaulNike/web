import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'personajes',
  loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {path: 'lugares',
  loadChildren: () => import('./pages/lugares/lugares.module').then(m => m.LugaresModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
