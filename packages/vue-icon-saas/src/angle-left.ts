import { svg } from '@opentiny/vue-common'
import AngleLeft from '@opentiny/vue-theme-saas/svgs/angle-left.svg'

const iconFn = () => svg({ name: 'IconAngleLeft', component: AngleLeft, filledComponent: AngleLeft })()

iconFn.__flag = { 'svgName': 'angle-left', 'hasFill': false }
export default iconFn
