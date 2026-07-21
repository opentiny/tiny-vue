import { svg } from '@opentiny/vue-common'
import ProPay from '@opentiny/vue-theme-saas/svgs/pro-pay.svg'

const iconFn = () => svg({ name: 'IconProPay', component: ProPay, filledComponent: ProPay })()

iconFn.__flag = { 'svgName': 'pro-pay', 'hasFill': false }
export default iconFn
