import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { MaterialModule } from './material/material.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';


@NgModule({
  declarations: [AppComponent, PaginaErrorComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
