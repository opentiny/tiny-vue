import { svg } from '@opentiny/vue-common'
import WaitForDeliveryO from '@opentiny/vue-theme-saas/svgs/wait-for-delivery-o.svg'
import WaitForDeliveryOFilled from '@opentiny/vue-theme-saas/svgs/wait-for-delivery-o-filled.svg'

const iconFn = () =>
  svg({ name: 'IconWaitForDeliveryO', component: WaitForDeliveryO, filledComponent: WaitForDeliveryOFilled })()
iconFn.__flag = { 'svgName': 'wait-for-delivery-o', 'hasFill': true }
export default iconFn
