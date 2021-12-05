import { checkoutDetailFragment } from '../common'

const getCheckout = /* GraphQL */ `
query($checkoutId: ID!){
  node(id: $checkoutId) {
    ... on Checkout {
        ${checkoutDetailFragment}
    }
  }
}
`

export default getCheckout
