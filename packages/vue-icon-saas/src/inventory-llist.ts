import { svg } from '@opentiny/vue-common'
import InventoryLlist from '@opentiny/vue-theme-saas/svgs/inventory-llist.svg'
import InventoryLlistFilled from '@opentiny/vue-theme-saas/svgs/inventory-llist-filled.svg'

const iconFn = () =>
  svg({ name: 'IconInventoryLlist', component: InventoryLlist, filledComponent: InventoryLlistFilled })()
iconFn.__flag = { 'svgName': 'inventory-llist', 'hasFill': true }
export default iconFn
