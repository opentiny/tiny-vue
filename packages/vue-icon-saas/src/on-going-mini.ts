import { svg } from '@opentiny/vue-common'
import OnGoingMini from '@opentiny/vue-theme-saas/svgs/on-going-mini.svg'

const iconFn = () => svg({ name: 'IconOnGoingMini', component: OnGoingMini, filledComponent: OnGoingMini })()

iconFn.__flag = { 'svgName': 'on-going-mini', 'hasFill': false }
export default iconFn
