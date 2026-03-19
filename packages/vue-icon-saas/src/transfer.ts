import { svg } from '@opentiny/vue-common'
import Transfer from '@opentiny/vue-theme-saas/svgs/transfer.svg'
import TransferFilled from '@opentiny/vue-theme-saas/svgs/transfer-filled.svg'

const iconFn = () => svg({ name: 'IconTransfer', component: Transfer, filledComponent: TransferFilled })()
iconFn.__flag = { 'svgName': 'transfer', 'hasFill': true }
export default iconFn
