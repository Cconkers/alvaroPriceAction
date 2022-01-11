import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclaracionCAComponent } from './declaracion-ca/declaracion-ca.component';
import { DeclaracionUEComponent } from './declaracion-ue/declaracion-ue.component';
import { DeclaracionUSComponent } from './declaracion-us/declaracion-us.component';

const routes: Routes = [
  {
    path: 'declaracion-ca',
    component: DeclaracionCAComponent,
  },
  {
    path: 'declaracion-ue',
    component: DeclaracionUEComponent,
  },
  {
    path: 'declaracion-us',
    component: DeclaracionUSComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeclaracionRoutingModule { }
