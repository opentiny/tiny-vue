import { svg } from '@opentiny/vue-common'
import WaitingForReceipt from '@opentiny/vue-theme-saas/svgs/waiting-for-receipt.svg'

const iconFn = () =>
  svg({ name: 'IconWaitingForReceipt', component: WaitingForReceipt, filledComponent: WaitingForReceipt })()

iconFn.__flag = { 'svgName': 'waiting-for-receipt', 'hasFill': false }
export default iconFn
