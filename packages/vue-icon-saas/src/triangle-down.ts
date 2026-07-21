import { svg } from '@opentiny/vue-common'
import TriangleDown from '@opentiny/vue-theme-saas/svgs/triangle-down.svg'

const iconFn = () => svg({ name: 'IconTriangleDown', component: TriangleDown, filledComponent: TriangleDown })()

iconFn.__flag = { 'svgName': 'triangle-down', 'hasFill': false }
export default iconFn
