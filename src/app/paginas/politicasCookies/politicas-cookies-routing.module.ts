import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasCookiesCAComponent } from './politicas-cookies-ca/politicas-cookies-ca.component';
import { PoliticasCookiesUEComponent } from './politicas-cookies-ue/politicas-cookies-ue.component';

const routes: Routes = [
  {
    path: 'politicas-cookies-ca',
    component: PoliticasCookiesCAComponent,
  },
  {
    path: 'politicas-cookies-ue',
    component: PoliticasCookiesUEComponent,
  },
  {
    path: 'politicas-cookies-us',
    component: PoliticasCookiesUEComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasCookiesRoutingModule {}
