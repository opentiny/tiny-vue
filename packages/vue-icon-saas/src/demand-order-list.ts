import { svg } from '@opentiny/vue-common'
import DemandOrderList from '@opentiny/vue-theme-saas/svgs/demand-order-list.svg'
import DemandOrderListFilled from '@opentiny/vue-theme-saas/svgs/demand-order-list-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDemandOrderList', component: DemandOrderList, filledComponent: DemandOrderListFilled })()
iconFn.__flag = { 'svgName': 'demand-order-list', 'hasFill': true }
export default iconFn
