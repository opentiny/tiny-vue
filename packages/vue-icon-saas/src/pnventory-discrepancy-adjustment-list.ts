import { svg } from '@opentiny/vue-common'
import PnventoryDiscrepancyAdjustmentList from '@opentiny/vue-theme-saas/svgs/pnventory-discrepancy-adjustment-list.svg'
import PnventoryDiscrepancyAdjustmentListFilled from '@opentiny/vue-theme-saas/svgs/pnventory-discrepancy-adjustment-list-filled.svg'

export default () =>
  svg({
    name: 'IconPnventoryDiscrepancyAdjustmentList',
    component: PnventoryDiscrepancyAdjustmentList,
    filledComponent: PnventoryDiscrepancyAdjustmentListFilled
  })()
