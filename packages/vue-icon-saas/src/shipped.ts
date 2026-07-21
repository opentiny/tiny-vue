import { svg } from '@opentiny/vue-common'
import Shipped from '@opentiny/vue-theme-saas/svgs/shipped.svg'

const iconFn = () => svg({ name: 'IconShipped', component: Shipped, filledComponent: Shipped })()

iconFn.__flag = { 'svgName': 'shipped', 'hasFill': false }
export default iconFn
