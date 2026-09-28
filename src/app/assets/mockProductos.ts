import { dataProduc } from "../Model/dataProduc";

const mockDatosProducto: dataProduc[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 59.9, stock: 1, imagenUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80', descripcion: 'Teclado mecánico con retroiluminación RGB, interruptores táctiles de alta precisión y chasis de aluminio resistente.' },
    { id: 2, nombre: 'Ratón óptico', precio: 19.5, stock: 2, imagenUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80', descripcion: 'Ratón óptico ergonómico con sensor ajustable de hasta 3200 DPI, diseño ultraligero y botones programables.' },
    { id: 3, nombre: 'Monitor 24"', precio: 139, stock: 2, imagenUrl: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&q=80', descripcion: 'Monitor Full HD de 24 pulgadas con panel IPS, frecuencia de refresco de 75Hz y tecnología de reducción de luz azul.' },
    { id: 4, nombre: 'Webcam Full HD 1080p', precio: 45.9, stock: 5, imagenUrl: 'assets/webcam.jpg', descripcion: 'Cámara web Full HD 1080p a 60fps con micrófono dual con cancelación de ruido, corrección de luz automática y enfoque automático.' },
    { id: 5, nombre: 'PC Gaming i7 / 16GB / 1TB SSD', precio: 899.0, stock: 3, imagenUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80', descripcion: 'Ordenador de sobremesa con procesador Intel Core i7, 16GB RAM DDR4, SSD 1TB NVMe rápido y gráfica dedicada Nvidia GTX con luces RGB.' },
    { id: 6, nombre: 'Auriculares Gaming con Micrófono', precio: 34.5, stock: 8, imagenUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80', descripcion: 'Cascos con sonido envolvente 7.1, almohadillas viscoelásticas confortables y micrófono abatible omnidireccional con supresión de ruido.' }
];

export default mockDatosProducto;
