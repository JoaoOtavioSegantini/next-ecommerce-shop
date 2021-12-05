import { checkoutDetailFragment } from '../common'

const checkoutCreate = /* GraphQL */ `
mutation checkoutCreate($input: CheckoutCreateInput = {}) {
  checkoutCreate(input: $input) {
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

export default checkoutCreate
