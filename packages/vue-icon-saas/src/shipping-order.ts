import { svg } from '@opentiny/vue-common'
import ShippingOrder from '@opentiny/vue-theme-saas/svgs/shipping-order.svg'
import ShippingOrderFilled from '@opentiny/vue-theme-saas/svgs/shipping-order-filled.svg'

const iconFn = () =>
  svg({ name: 'IconShippingOrder', component: ShippingOrder, filledComponent: ShippingOrderFilled })()
iconFn.__flag = { 'svgName': 'shipping-order', 'hasFill': true }
export default iconFn
