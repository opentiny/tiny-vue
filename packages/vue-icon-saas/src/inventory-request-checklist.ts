import { svg } from '@opentiny/vue-common'
import InventoryRequestChecklist from '@opentiny/vue-theme-saas/svgs/inventory-request-checklist.svg'
import InventoryRequestChecklistFilled from '@opentiny/vue-theme-saas/svgs/inventory-request-checklist-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconInventoryRequestChecklist',
    component: InventoryRequestChecklist,
    filledComponent: InventoryRequestChecklistFilled
  })()
iconFn.__flag = { 'svgName': 'inventory-request-checklist', 'hasFill': true }
export default iconFn
