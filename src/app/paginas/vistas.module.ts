import { NgModule } from '@angular/core';

import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
    FormacionComponent,
    GratisComponent,
    ContactoComponent,],
  imports: [],
})
export class VistasModule { }
