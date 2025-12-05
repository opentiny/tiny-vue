import { svg } from '@opentiny/vue-common'
import TransferringInventoryListsAcrossOrganizations from '@opentiny/vue-theme-saas/svgs/transferring-inventory-lists-across-organizations.svg'
import TransferringInventoryListsAcrossOrganizationsFilled from '@opentiny/vue-theme-saas/svgs/transferring-inventory-lists-across-organizations-filled.svg'

export default () =>
  svg({
    name: 'IconTransferringInventoryListsAcrossOrganizations',
    component: TransferringInventoryListsAcrossOrganizations,
    filledComponent: TransferringInventoryListsAcrossOrganizationsFilled
  })()
