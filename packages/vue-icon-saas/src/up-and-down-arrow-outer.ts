import { svg } from '@opentiny/vue-common'
import UpAndDownArrowOuter from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-outer.svg'
import UpAndDownArrowOuterFilled from '@opentiny/vue-theme-saas/svgs/up-and-down-arrow-outer-filled.svg'

const iconFn = () =>
  svg({ name: 'IconUpAndDownArrowOuter', component: UpAndDownArrowOuter, filledComponent: UpAndDownArrowOuterFilled })()
iconFn.__flag = { 'svgName': 'up-and-down-arrow-outer', 'hasFill': true }
export default iconFn
