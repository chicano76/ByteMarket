import { Component } from '@angular/core';
import { dataProduc } from '../Model/dataProduc';
import { TiendaServiceTs } from '../services/tienda.service.ts';


@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  public dataProducList: dataProduc[] = [];
  public carrito : { producto: dataProduc; cantidad: number }[] = [];

  constructor(private service:TiendaServiceTs){
    this.dataProducList=this.service.getProductos();
    this.carrito=this.service.getCarrito();
  }

  addToCart(producto:dataProduc){
    this.service.addToCart(producto);
  }

  removeFromCart(producto: dataProduc) {
    this.service.removeFromCart(producto);
    this.carrito = this.service.getCarrito();
  }
}

