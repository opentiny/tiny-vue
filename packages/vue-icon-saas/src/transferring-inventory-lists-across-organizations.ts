import { svg } from '@opentiny/vue-common'
import TransferringInventoryListsAcrossOrganizations from '@opentiny/vue-theme-saas/svgs/transferring-inventory-lists-across-organizations.svg'
import TransferringInventoryListsAcrossOrganizationsFilled from '@opentiny/vue-theme-saas/svgs/transferring-inventory-lists-across-organizations-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconTransferringInventoryListsAcrossOrganizations',
    component: TransferringInventoryListsAcrossOrganizations,
    filledComponent: TransferringInventoryListsAcrossOrganizationsFilled
  })()
iconFn.__flag = { 'svgName': 'transferring-inventory-lists-across-organizations', 'hasFill': true }
export default iconFn
