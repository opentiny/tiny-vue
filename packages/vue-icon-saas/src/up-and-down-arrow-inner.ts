import { svg } from '@opentiny/vue-common'
import UpAndDownArrowInner from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-inner.svg'
import UpAndDownArrowInnerFilled from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-inner-filled.svg'

const iconFn = () =>
  svg({ name: 'IconUpAndDownArrowInner', component: UpAndDownArrowInner, filledComponent: UpAndDownArrowInnerFilled })()
iconFn.__flag = { 'svgName': 'up-and-down-arrow-inner', 'hasFill': true }
export default iconFn
