import { svg } from '@opentiny/vue-common'
import AngleRight from '@opentiny/vue-theme-saas/svgs/angle-right.svg'

const iconFn = () => svg({ name: 'IconAngleRight', component: AngleRight, filledComponent: AngleRight })()

iconFn.__flag = { 'svgName': 'angle-right', 'hasFill': false }
export default iconFn
