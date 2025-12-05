import { svg } from '@opentiny/vue-common'
import InventoryRequestChecklist from '@opentiny/vue-theme-saas/svgs/inventory-request-checklist.svg'
import InventoryRequestChecklistFilled from '@opentiny/vue-theme-saas/svgs/inventory-request-checklist-filled.svg'

export default () =>
  svg({
    name: 'IconInventoryRequestChecklist',
    component: InventoryRequestChecklist,
    filledComponent: InventoryRequestChecklistFilled
  })()
