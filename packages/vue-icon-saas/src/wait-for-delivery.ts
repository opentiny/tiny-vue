import { svg } from '@opentiny/vue-common'
import WaitForDelivery from '@opentiny/vue-theme-saas/svgs/wait-for-delivery.svg'
import WaitForDeliveryFilled from '@opentiny/vue-theme-saas/svgs/wait-for-delivery-filled.svg'

const iconFn = () =>
  svg({ name: 'IconWaitForDelivery', component: WaitForDelivery, filledComponent: WaitForDeliveryFilled })()
iconFn.__flag = { 'svgName': 'wait-for-delivery', 'hasFill': true }
export default iconFn
