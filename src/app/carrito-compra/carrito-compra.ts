import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dataProduc } from '../Model/dataProduc';
import { TiendaServiceTs } from '../services/tienda.service.ts';

@Component({
  selector: 'app-carrito-compra',
  standalone: false,
  templateUrl: './carrito-compra.html',
  styleUrl: './carrito-compra.scss'
})
export class CarritoCompra {

  @Input() listaCarrito: { producto: dataProduc; cantidad: number }[] = [];
  @Output() removeCarrito = new EventEmitter<dataProduc>();

  defaultImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23ffffff"/></svg>';
  pedidoCompletadoModal = false;

  constructor(private service: TiendaServiceTs) {}

  clickRemoveCarrito(producto: dataProduc) {
    this.removeCarrito.emit(producto);
  }

  get total(): number {
    return this.listaCarrito.reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
  }

  get totalArticulos(): number {
    return this.listaCarrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  tramitarPedido(): void {
    if (this.listaCarrito.length === 0) return;
    this.pedidoCompletadoModal = true;
  }

  cerrarModalPedido(): void {
    this.pedidoCompletadoModal = false;
    this.service.vaciarCarrito();
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImg;
  }
}
