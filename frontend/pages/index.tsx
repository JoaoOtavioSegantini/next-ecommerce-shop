import { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/get-all-products'
import { getConfig } from 'framework/shopify/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()

  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  )
}

Home.Layout = Layout

export default Home
