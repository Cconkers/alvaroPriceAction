import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasCookiesCAComponent } from './politicasCookies/politicas-cookies-ca/politicas-cookies-ca.component';
import { DeclaracionModule } from './declaracion/declaracion.module';
import { PoliticasCookiesModule } from './politicasCookies/politicas-cookies.module';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'formacion',
        component: FormacionComponent,
      },
      {
        path: 'gratis',
        component: GratisComponent,
      },
      {
        path: 'declaracion',
        loadChildren: () =>
          import('./declaracion/declaracion.module').then((m) => m.DeclaracionModule),
      },
      {
        path: 'politicas',
        loadChildren: () =>
          import('./politicasCookies/politicas-cookies.module').then((m) => m.PoliticasCookiesModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasRoutingModule {}
