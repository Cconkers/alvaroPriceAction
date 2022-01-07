import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { GratisComponent } from './gratis/gratis.component';
import { InicioComponent } from './inicio/inicio.component';
import { VistasRoutingModule } from './vistas-routing.module';
import { MenuComponent } from '../componentes/menu/menu.component';
import { CabezeraPaginaComponent } from '../componentes/cabezera-pagina/cabezera-pagina.component';
import { PiePaginaComponent } from '../componentes/pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    InicioComponent,
    FormacionComponent,
    GratisComponent,
    ContactoComponent,
    PiePaginaComponent,
    CabezeraPaginaComponent,
    MenuComponent,
  ],
  imports: [VistasRoutingModule, MaterialModule],
  exports: [],
})
export class VistasModule {}
