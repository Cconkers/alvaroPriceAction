import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';

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
]
},
{
path: '**',
redirectTo: 'inicio'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
