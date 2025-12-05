import { svg } from '@opentiny/vue-common'
import TransferInventoryList from '@opentiny/vue-theme-saas/svgs/transfer-inventory-list.svg'
import TransferInventoryListFilled from '@opentiny/vue-theme-saas/svgs/transfer-inventory-list-filled.svg'

export default () =>
  svg({
    name: 'IconTransferInventoryList',
    component: TransferInventoryList,
    filledComponent: TransferInventoryListFilled
  })()
