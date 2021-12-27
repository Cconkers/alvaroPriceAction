import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabezeraPaginaComponent } from './componentes/cabezera-pagina/cabezera-pagina.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CabezeraPaginaComponent,
    PiePaginaComponent,
    MenuComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
