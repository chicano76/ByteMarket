import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './menu/menu';
import { Main } from './main/main';
import { ListadoProductos } from './listado-productos/listado-productos';
import { CarritoCompra } from './carrito-compra/carrito-compra';
import { AdminProductos } from './admin-productos/admin-productos';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    App,
    Menu,
    Main,
    ListadoProductos,
    CarritoCompra,
    AdminProductos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],

  bootstrap: [App]
})
export class AppModule { }
