import { Product } from '@common/types/products'
import { ProductConnection } from '../schema'
import { fetchAPI, normalizeProduct, getAllProductsQuery } from '../utils'

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchAPI<ReturnType>({
    query: getAllProductsQuery
  })
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product)
    }) ?? []

  return products
}

export default getAllProducts
