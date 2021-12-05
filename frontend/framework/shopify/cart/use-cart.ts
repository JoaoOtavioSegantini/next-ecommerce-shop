import useCart, { UseCart } from '@common/cart/use-cart'
import { Cart } from '@common/types/cart'
import { SWRHook } from '@common/types/hooks'
import { useApiProvider } from '@common'
import { Checkout } from '@framework/schema'
import {
  checkoutToCart,
  createCheckout,
  getProductQuery
} from '@framework/utils'
import { useMemo } from 'react'
import Cookies from 'js-cookie'

export default useCart as UseCart<typeof handler>

export type UseCartHookDescriptor = {
  fetcherInput: {
    checkoutId: string
  }
  fetcherOutput: {
    node: Checkout
  }
  data: Cart
}

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    query: getProductQuery
  },
  async fetcher({ fetch, options, input: { checkoutId } }) {
    let checkout: Checkout

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId
        }
      })
      checkout = data.node
    } else {
      checkout = await createCheckout(fetch as any)
    }

    const cart = checkoutToCart(checkout)
    return cart
  },
  useHook:
    ({ useData }) =>
    () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { checkoutCookie } = useApiProvider()

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useData({
        swrOptions: {
          revalidateOnFocus: false
        }
      })

      if (result.data?.completedAt) {
        Cookies.remove(checkoutCookie)
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useMemo(() => {
        return {
          ...result,
          isEmpty: (result.data?.lineItems.length ?? 0) <= 0
        }
      }, [result])
    }
}
