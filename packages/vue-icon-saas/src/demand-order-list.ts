import { svg } from '@opentiny/vue-common'
import DemandOrderList from '@opentiny/vue-theme-saas/svgs/demand-order-list.svg'
import DemandOrderListFilled from '@opentiny/vue-theme-saas/svgs/demand-order-list-filled.svg'

export default () =>
  svg({ name: 'IconDemandOrderList', component: DemandOrderList, filledComponent: DemandOrderListFilled })()
