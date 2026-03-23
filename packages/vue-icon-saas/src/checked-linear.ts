import { svg } from '@opentiny/vue-common'
import CheckedLinear from '@opentiny/vue-theme-saas/svgs/checked-linear.svg'
import CheckedLinearFilled from '@opentiny/vue-theme-saas/svgs/checked-linear-filled.svg'

const iconFn = () =>
  svg({ name: 'IconCheckedLinear', component: CheckedLinear, filledComponent: CheckedLinearFilled })()
iconFn.__flag = { 'svgName': 'checked-linear', 'hasFill': true }
export default iconFn
