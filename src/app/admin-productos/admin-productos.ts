import { Component } from '@angular/core';
import { dataProduc } from '../Model/dataProduc';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaServiceTs } from '../services/tienda.service.ts';


@Component({
  selector: 'app-admin-productos',
  standalone: false,
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.scss'
})
export class AdminProductos {
 
  formulario! : FormGroup;
  dataPoducList: dataProduc[] = [];
  defaultImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23ffffff"/></svg>';
  mensajeExito: string | null = null;

  constructor(private fb: FormBuilder, private service: TiendaServiceTs){}

  ngOnInit() {
    this.dataPoducList = this.service.getProductos();
    this.formulario = this.fb.group({
      nombreProducto: ['', [Validators.required, Validators.pattern('.*\\S.*')]],
      precioProducto: ['', [Validators.required, Validators.min(0.01)]],
      stockProducto: ['', [Validators.required, Validators.min(0)]],
      imagenUrl: [''],
      descripcionProducto: ['']
    });
  }

  submit(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const imagenInput = this.formulario.value.imagenUrl ? this.formulario.value.imagenUrl.trim() : '';
    const descInput = this.formulario.value.descripcionProducto ? this.formulario.value.descripcionProducto.trim() : '';

    const nuevo: dataProduc = {
      id: 0,
      nombre: this.formulario.value.nombreProducto!.trim(),
      precio: this.formulario.value.precioProducto,
      stock: this.formulario.value.stockProducto,
      imagenUrl: imagenInput || undefined,
      descripcion: descInput || undefined
    };

    this.service.addProducto(nuevo);
    this.formulario.reset();
    this.dataPoducList = this.service.getProductos();

    this.mensajeExito = `¡Producto "${nuevo.nombre}" registrado con éxito!`;
    setTimeout(() => {
      this.mensajeExito = null;
    }, 3500);
  }

  get isFormEmpty(): boolean {
    if (!this.formulario) return true;
    const v = this.formulario.value;
    return !Object.values(v).some(val => val !== null && val !== undefined && val !== '' && String(val).trim().length > 0);
  }

  limpiarFormulario(): void {
    this.formulario.reset();
  }
    
  delete(producto: dataProduc): void {
    if (confirm(`¿Estás seguro de que deseas eliminar el producto "${producto.nombre}"?`)) {
      this.service.deleteProducto(producto);
      this.dataPoducList = this.service.getProductos();
    }
  }

  incrementStock(producto: dataProduc): void {
    this.service.incrementStock(producto);
  }

  decrementStock(producto: dataProduc): void {
    this.service.decrementStock(producto);
  }

  imagenAmpliadaUrl: string | null = null;

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImg;
  }

  verImagen(url?: string): void {
    this.imagenAmpliadaUrl = url || this.defaultImg;
  }

  cerrarImagen(): void {
    this.imagenAmpliadaUrl = null;
  }

}
