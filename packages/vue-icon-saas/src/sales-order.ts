import { svg } from '@opentiny/vue-common'
import SalesOrder from '@opentiny/vue-theme-saas/svgs/sales-order.svg'
import SalesOrderFilled from '@opentiny/vue-theme-saas/svgs/sales-order-filled.svg'

const iconFn = () => svg({ name: 'IconSalesOrder', component: SalesOrder, filledComponent: SalesOrderFilled })()
iconFn.__flag = { 'svgName': 'sales-order', 'hasFill': true }
export default iconFn
