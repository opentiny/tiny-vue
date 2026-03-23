import { svg } from '@opentiny/vue-common'
import PurchaseContract from '@opentiny/vue-theme-saas/svgs/purchase-contract.svg'
import PurchaseContractFilled from '@opentiny/vue-theme-saas/svgs/purchase-contract-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPurchaseContract', component: PurchaseContract, filledComponent: PurchaseContractFilled })()
iconFn.__flag = { 'svgName': 'purchase-contract', 'hasFill': true }
export default iconFn
