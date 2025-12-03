import { svg } from '@opentiny/vue-common'
import PurchasePlannedOrder from '@opentiny/vue-theme-saas/svgs/purchase-planned-order.svg'
import PurchasePlannedOrderFilled from '@opentiny/vue-theme-saas/svgs/purchase-planned-order-filled.svg'

export default () =>
  svg({
    name: 'IconPurchasePlannedOrder',
    component: PurchasePlannedOrder,
    filledComponent: PurchasePlannedOrderFilled
  })()
