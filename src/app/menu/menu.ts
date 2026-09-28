import { Component } from '@angular/core';
import { TiendaServiceTs } from '../services/tienda.service.ts';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  constructor(private service: TiendaServiceTs) {}

  get totalArticulosCarrito(): number {
    return this.service.getCarrito().reduce((acc, item) => acc + item.cantidad, 0);
  }
}
