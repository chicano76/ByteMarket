import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dataProduc } from '../Model/dataProduc';

@Component({
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss'
})
export class ListadoProductos {

  @Input() listaProductos: dataProduc[] = [];
  @Output() addCarrito = new EventEmitter <dataProduc>();

  defaultImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23ffffff"/></svg>';

  productoDetalle: dataProduc | null = null;
  imagenAmpliadaUrl: string | null = null;

  clickAddCarrito(producto: dataProduc){
    this.addCarrito.emit(producto);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImg;
  }

  verDetalle(producto: dataProduc): void {
    this.productoDetalle = producto;
  }

  cerrarDetalle(): void {
    this.productoDetalle = null;
  }

  verImagen(url?: string): void {
    this.imagenAmpliadaUrl = url || this.defaultImg;
  }

  cerrarImagen(): void {
    this.imagenAmpliadaUrl = null;
  }
}
