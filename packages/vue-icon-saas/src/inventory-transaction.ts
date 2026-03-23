import { svg } from '@opentiny/vue-common'
import InventoryTransaction from '@opentiny/vue-theme-saas/svgs/inventory-transaction.svg'
import InventoryTransactionFilled from '@opentiny/vue-theme-saas/svgs/inventory-transaction-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconInventoryTransaction',
    component: InventoryTransaction,
    filledComponent: InventoryTransactionFilled
  })()
iconFn.__flag = { 'svgName': 'inventory-transaction', 'hasFill': true }
export default iconFn
