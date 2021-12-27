import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./paginas/vistas.module').then((m) => m.VistasModule),
  },
  {
    path: '404',
    component: PaginaErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
