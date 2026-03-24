import { svg } from '@opentiny/vue-common'
import Numeric from '@opentiny/vue-theme-saas/svgs/numeric.svg'
import NumericFilled from '@opentiny/vue-theme-saas/svgs/numeric-filled.svg'

const iconFn = () => svg({ name: 'IconNumeric', component: Numeric, filledComponent: NumericFilled })()
iconFn.__flag = { 'svgName': 'numeric', 'hasFill': true }
export default iconFn
