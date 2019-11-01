import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'clientelist',
    component: ClienteListComponent
  },
  {
    path:'clienteadd',
    component:ClienteAddComponent
  },
  {
    path:'clienteedit/:id',
    component:ClienteEditComponent
  },
  {
    path:'ayuda',
    component: AyudaComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'menu',
    component:MenuComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
