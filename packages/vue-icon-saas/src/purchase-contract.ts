import { svg } from '@opentiny/vue-common'
import PurchaseContract from '@opentiny/vue-theme-saas/svgs/purchase-contract.svg'
import PurchaseContractFilled from '@opentiny/vue-theme-saas/svgs/purchase-contract-filled.svg'

export default () =>
  svg({ name: 'IconPurchaseContract', component: PurchaseContract, filledComponent: PurchaseContractFilled })()
