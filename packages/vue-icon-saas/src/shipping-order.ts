import { svg } from '@opentiny/vue-common'
import ShippingOrder from '@opentiny/vue-theme-saas/svgs/shipping-order.svg'
import ShippingOrderFilled from '@opentiny/vue-theme-saas/svgs/shipping-order-filled.svg'

export default () =>
  svg({ name: 'IconShippingOrder', component: ShippingOrder, filledComponent: ShippingOrderFilled })()
