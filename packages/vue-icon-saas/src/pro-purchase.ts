import { svg } from '@opentiny/vue-common'
import ProPurchase from '@opentiny/vue-theme-saas/svgs/pro-purchase.svg'

const iconFn = () => svg({ name: 'IconProPurchase', component: ProPurchase, filledComponent: ProPurchase })()

iconFn.__flag = { 'svgName': 'pro-purchase', 'hasFill': false }
export default iconFn
