import { checkoutDetailFragment } from '../common'

const checkoutLineItemsAdd = /* GraphQL */ `
mutation(
  $checkoutId: ID!,
  $lineItems: [CheckoutLineItemInput!]! ) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
    checkoutUserErrors {
      field
      message
    }
    checkout {
     ${checkoutDetailFragment}
    }
  }
}
`

export default checkoutLineItemsAdd
