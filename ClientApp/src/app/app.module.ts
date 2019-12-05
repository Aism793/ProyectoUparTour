import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule }from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MenuComponent } from './menu/menu.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AppRoutingModule } from './app-routing.module';
import { ReservaAddComponent } from './reserva-add/reserva-add.component';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { LugarAddComponent } from './lugar-add/lugar-add.component';
import { LugarEditComponent } from './lugar-edit/lugar-edit.component';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { HotelAddComponent } from './hotel-add/hotel-add.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { RestauranteAddComponent } from './restaurante-add/restaurante-add.component';
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteEditComponent } from './restaurante-edit/restaurante-edit.component';
import { ConductorAddComponent } from './conductor-add/conductor-add.component';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorEditComponent } from './conductor-edit/conductor-edit.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoAddComponent } from './vehiculo-add/vehiculo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteAddComponent,
    ClienteListComponent,
    ClienteEditComponent,
    AyudaComponent,
    ServiciosComponent,
    MenuComponent,
    NosotrosComponent,
    ReservaAddComponent,
    ReservaListComponent,
    ReservaEditComponent,
    LugarAddComponent,
    LugarEditComponent,
    LugarListComponent,
    HotelAddComponent,
    HotelEditComponent,
    HotelListComponent,
    RestauranteAddComponent,
    RestauranteListComponent,
    RestauranteEditComponent,
    ConductorAddComponent,
    ConductorListComponent,
    ConductorEditComponent,
    VehiculoEditComponent,
    VehiculoListComponent,
    VehiculoAddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService, {dataEncapsulation: false}
    ),*/
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
