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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeclaracionUEComponent } from './declaracion/declaracion-ue/declaracion-ue.component';
import { DeclaracionCAComponent } from './declaracion/declaracion-ca/declaracion-ca.component';
import { DeclaracionUSComponent } from './declaracion/declaracion-us/declaracion-us.component';
import { PoliticasCookiesUEComponent } from './politicasCookies/politicas-cookies-ue/politicas-cookies-ue.component';
import { PoliticasCookiesCAComponent } from './politicasCookies/politicas-cookies-ca/politicas-cookies-ca.component';
import { PoliticasCookiesUSComponent } from './politicasCookies/politicas-cookies-us/politicas-cookies-us.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    InicioComponent,
    FormacionComponent,
    GratisComponent,
    ContactoComponent,
    PiePaginaComponent,
    CabezeraPaginaComponent,
    MenuComponent,
    DeclaracionUEComponent,
    DeclaracionCAComponent,
    DeclaracionUSComponent,
    PoliticasCookiesUEComponent,
    PoliticasCookiesCAComponent,
    PoliticasCookiesUSComponent,
  ],
  imports: [VistasRoutingModule,
    NgxScrollTopModule,
    NgbModule, MaterialModule],
  exports: [],
})
export class VistasModule {}
