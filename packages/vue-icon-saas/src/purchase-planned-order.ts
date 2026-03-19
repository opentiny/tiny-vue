import { svg } from '@opentiny/vue-common'
import PurchasePlannedOrder from '@opentiny/vue-theme-saas/svgs/purchase-planned-order.svg'
import PurchasePlannedOrderFilled from '@opentiny/vue-theme-saas/svgs/purchase-planned-order-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconPurchasePlannedOrder',
    component: PurchasePlannedOrder,
    filledComponent: PurchasePlannedOrderFilled
  })()
iconFn.__flag = { 'svgName': 'purchase-planned-order', 'hasFill': true }
export default iconFn
