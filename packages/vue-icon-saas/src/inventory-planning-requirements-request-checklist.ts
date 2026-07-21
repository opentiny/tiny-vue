import { svg } from '@opentiny/vue-common'
import InventoryPlanningRequirementsRequestChecklist from '@opentiny/vue-theme-saas/svgs/inventory-planning-requirements-request-checklist.svg'
import InventoryPlanningRequirementsRequestChecklistFilled from '@opentiny/vue-theme-saas/svgs/inventory-planning-requirements-request-checklist-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconInventoryPlanningRequirementsRequestChecklist',
    component: InventoryPlanningRequirementsRequestChecklist,
    filledComponent: InventoryPlanningRequirementsRequestChecklistFilled
  })()
iconFn.__flag = { 'svgName': 'inventory-planning-requirements-request-checklist', 'hasFill': true }
export default iconFn
