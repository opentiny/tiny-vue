import { svg } from '@opentiny/vue-common'
import InventoryLlist from '@opentiny/vue-theme-saas/svgs/inventory-llist.svg'
import InventoryLlistFilled from '@opentiny/vue-theme-saas/svgs/inventory-llist-filled.svg'

export default () =>
  svg({ name: 'IconInventoryLlist', component: InventoryLlist, filledComponent: InventoryLlistFilled })()
