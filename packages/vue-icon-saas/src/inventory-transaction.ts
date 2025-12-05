import { svg } from '@opentiny/vue-common'
import InventoryTransaction from '@opentiny/vue-theme-saas/svgs/inventory-transaction.svg'
import InventoryTransactionFilled from '@opentiny/vue-theme-saas/svgs/inventory-transaction-filled.svg'

export default () =>
  svg({
    name: 'IconInventoryTransaction',
    component: InventoryTransaction,
    filledComponent: InventoryTransactionFilled
  })()
