import { svg } from '@opentiny/vue-common'
import Minus from '@opentiny/vue-theme-saas/svgs/minus.svg'
import MinusFilled from '@opentiny/vue-theme-saas/svgs/minus-filled.svg'

const iconFn = () => svg({ name: 'IconMinus', component: Minus, filledComponent: MinusFilled })()
iconFn.__flag = { 'svgName': 'minus', 'hasFill': true }
export default iconFn
