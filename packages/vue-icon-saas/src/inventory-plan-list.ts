import { svg } from '@opentiny/vue-common'
import InventoryPlanList from '@opentiny/vue-theme-saas/svgs/inventory-plan-list.svg'
import InventoryPlanListFilled from '@opentiny/vue-theme-saas/svgs/inventory-plan-list-filled.svg'

export default () =>
  svg({ name: 'IconInventoryPlanList', component: InventoryPlanList, filledComponent: InventoryPlanListFilled })()
