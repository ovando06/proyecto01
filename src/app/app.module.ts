import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ruta padre -> modulo raiz
import { AppRoutingModule } from './app-routing.module';

//archivo component general
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { Vista1Component } from './vista1/vista1.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

//solo importamos componentes globales
import { SharedModule } from './modules/shared/components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Vista1Component,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
