export interface ProductImages {
  url: string
  alt?: string
}

export interface ProductPrice {
  value: number
  currencyCode: 'USD' | 'EUR' | 'BRL' | string
}

export interface Product {
  price: ProductPrice
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: ProductImages[]
}
