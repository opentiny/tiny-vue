import { svg } from '@opentiny/vue-common'
import PnventoryDiscrepancyAdjustmentList from '@opentiny/vue-theme-saas/svgs/pnventory-discrepancy-adjustment-list.svg'
import PnventoryDiscrepancyAdjustmentListFilled from '@opentiny/vue-theme-saas/svgs/pnventory-discrepancy-adjustment-list-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconPnventoryDiscrepancyAdjustmentList',
    component: PnventoryDiscrepancyAdjustmentList,
    filledComponent: PnventoryDiscrepancyAdjustmentListFilled
  })()
iconFn.__flag = { 'svgName': 'pnventory-discrepancy-adjustment-list', 'hasFill': true }
export default iconFn
