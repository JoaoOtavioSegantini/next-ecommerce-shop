import { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/product/get-all-products'
import { getConfig } from 'framework/shopify/api/config'
import { Layout } from '@components/common'

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
  return <div className="root">{JSON.stringify(products)}</div>
}

Home.Layout = Layout

export default Home
