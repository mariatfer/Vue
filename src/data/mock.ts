export interface ProductCard {
  id: number
  image: string
  title: string
  description: string
  price: number
}

export const mockProducts: ProductCard[] = [
  {
    id: 1,
    image: '/src/assets/logo.svg',
    title: 'Laptop Gaming UltraPro',
    description:
      'Potente laptop gaming con procesador Intel Core i9 y tarjeta gráfica NVIDIA RTX 3080 Ti. Pantalla de 16 pulgadas 4K.',
    price: 1999.99,
  },
  {
    id: 2,
    image: '/src/assets/logo.svg',
    title: 'Smartphone X5 Pro Max"',
    description:
      'Teléfono inteligente con pantalla AMOLED de 6.7\", cámara triple de 50MP y batería de larga duración de 5000mAh.',
    price: 799.99,
  },
  {
    id: 3,
    image: '/src/assets/logo.svg',
    title: 'Auriculares Elite Wireless',
    description:
      'Auriculares inalámbricos con tecnología Bluetooth 5.2, cancelación activa de ruido y autonomía de hasta 48 horas.',
    price: 99.99,
  },
]
