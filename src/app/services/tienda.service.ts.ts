import { Injectable } from '@angular/core';
import { dataProduc } from '../Model/dataProduc';
import mockDatosProducto from '../assets/mockProductos';


@Injectable({
  providedIn: 'root'
})
export class TiendaServiceTs {

  private readonly STORAGE_KEY = 'productos_app';
  public dataProducList: dataProduc[] = [];
  public carrito: { producto: dataProduc; cantidad: number }[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          this.dataProducList = JSON.parse(saved);
          return;
        } catch (e) {
          console.error('Error al cargar productos desde localStorage', e);
        }
      }
    }
    // Si no hay datos guardados o falla la lectura, usar mockProductos
    this.dataProducList = JSON.parse(JSON.stringify(mockDatosProducto));
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.dataProducList));
    }
  }

  getProductos(): dataProduc[] {
    return this.dataProducList;
  }

  getCarrito(): { producto: dataProduc; cantidad: number }[] {
    return this.carrito;
  }

  addToCart(producto: dataProduc) {
    if (producto.stock <= 0) return;
    producto.stock--;
    const item = this.carrito.find(i => i.producto.id === producto.id);

    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ producto: producto, cantidad: 1 });
    }
    this.saveToLocalStorage();
  }

  removeFromCart(producto: dataProduc) {
    const item = this.carrito.find(i => i.producto.id === producto.id);
    if (!item) return;
    item.cantidad--;
    producto.stock++;

    if (item.cantidad === 0) {
      this.carrito = this.carrito.filter(i => i.producto.id !== producto.id);
    }
    this.saveToLocalStorage();
  }

  addProducto(producto: dataProduc) {
    var nextId = 1;

    if (this.dataProducList.length > 0) {
      const maxId = Math.max(...this.dataProducList.map(p => p.id));
      nextId = maxId + 1;
    }
    producto.id = nextId;
    this.dataProducList.push(producto);
    this.saveToLocalStorage();
  }

  deleteProducto(producto: dataProduc) {
    this.dataProducList = this.dataProducList.filter(p => p.id !== producto.id);
    this.carrito = this.carrito.filter(i => i.producto.id !== producto.id);
    this.saveToLocalStorage();
  }

  incrementStock(producto: dataProduc) {
    producto.stock++;
    this.saveToLocalStorage();
  }

  decrementStock(producto: dataProduc) {
    if (producto.stock > 0) {
      producto.stock--;
      this.saveToLocalStorage();
    }
  }

  resetCatalog(): void {
    this.dataProducList = JSON.parse(JSON.stringify(mockDatosProducto));
    this.saveToLocalStorage();
  }

  vaciarCarrito(): void {
    this.carrito.length = 0;
  }

}
