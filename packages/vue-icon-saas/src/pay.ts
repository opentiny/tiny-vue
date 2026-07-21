import { svg } from '@opentiny/vue-common'
import Pay from '@opentiny/vue-theme-saas/svgs/pay.svg'
import PayFilled from '@opentiny/vue-theme-saas/svgs/pay-filled.svg'

const iconFn = () => svg({ name: 'IconPay', component: Pay, filledComponent: PayFilled })()
iconFn.__flag = { 'svgName': 'pay', 'hasFill': true }
export default iconFn
