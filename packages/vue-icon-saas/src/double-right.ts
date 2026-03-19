import { svg } from '@opentiny/vue-common'
import DoubleRight from '@opentiny/vue-theme-saas/svgs/double-right.svg'
import DoubleRightFilled from '@opentiny/vue-theme-saas/svgs/double-right-filled.svg'

const iconFn = () => svg({ name: 'IconDoubleRight', component: DoubleRight, filledComponent: DoubleRightFilled })()
iconFn.__flag = { 'svgName': 'double-right', 'hasFill': true }
export default iconFn
