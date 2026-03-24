import { svg } from '@opentiny/vue-common'
import InventoryOrganization from '@opentiny/vue-theme-saas/svgs/inventory-organization.svg'
import InventoryOrganizationFilled from '@opentiny/vue-theme-saas/svgs/inventory-organization-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconInventoryOrganization',
    component: InventoryOrganization,
    filledComponent: InventoryOrganizationFilled
  })()
iconFn.__flag = { 'svgName': 'inventory-organization', 'hasFill': true }
export default iconFn
