import { svg } from '@opentiny/vue-common'
import Order from '@opentiny/vue-theme-saas/svgs/order.svg'
import OrderFilled from '@opentiny/vue-theme-saas/svgs/order-filled.svg'

const iconFn = () => svg({ name: 'IconOrder', component: Order, filledComponent: OrderFilled })()
iconFn.__flag = { 'svgName': 'order', 'hasFill': true }
export default iconFn
