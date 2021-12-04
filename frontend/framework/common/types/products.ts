export interface ProductOptionValues {
  label: string
  hexColor?: string
}

export interface ProductOption {
  id: string
  displayName: string
  values: ProductOptionValues[]
}

export interface ProductVariant {
  id: string
  name: string
  sku: string
  image?: ProductImages
  requiresShipping: boolean
  price: number
  listPrice: number
  options: ProductOption[]
}

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
  options: ProductOption[]
  variants: ProductVariant[]
}
