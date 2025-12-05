import { svg } from '@opentiny/vue-common'
import Order from '@opentiny/vue-theme-saas/svgs/order.svg'
import OrderFilled from '@opentiny/vue-theme-saas/svgs/order-filled.svg'

export default () => svg({ name: 'IconOrder', component: Order, filledComponent: OrderFilled })()
