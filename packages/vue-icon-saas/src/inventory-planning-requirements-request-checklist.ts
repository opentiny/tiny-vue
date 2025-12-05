import { svg } from '@opentiny/vue-common'
import InventoryPlanningRequirementsRequestChecklist from '@opentiny/vue-theme-saas/svgs/inventory-planning-requirements-request-checklist.svg'
import InventoryPlanningRequirementsRequestChecklistFilled from '@opentiny/vue-theme-saas/svgs/inventory-planning-requirements-request-checklist-filled.svg'

export default () =>
  svg({
    name: 'IconInventoryPlanningRequirementsRequestChecklist',
    component: InventoryPlanningRequirementsRequestChecklist,
    filledComponent: InventoryPlanningRequirementsRequestChecklistFilled
  })()
