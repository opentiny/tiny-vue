import { svg } from '@opentiny/vue-common'
import InventoryPlanList from '@opentiny/vue-theme-saas/svgs/inventory-plan-list.svg'
import InventoryPlanListFilled from '@opentiny/vue-theme-saas/svgs/inventory-plan-list-filled.svg'

const iconFn = () =>
  svg({ name: 'IconInventoryPlanList', component: InventoryPlanList, filledComponent: InventoryPlanListFilled })()
iconFn.__flag = { 'svgName': 'inventory-plan-list', 'hasFill': true }
export default iconFn
