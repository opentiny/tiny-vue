import { svg } from '@opentiny/vue-common'
import TriangleUp from '@opentiny/vue-theme-saas/svgs/triangle-up.svg'

const iconFn = () => svg({ name: 'IconTriangleUp', component: TriangleUp, filledComponent: TriangleUp })()

iconFn.__flag = { 'svgName': 'triangle-up', 'hasFill': false }
export default iconFn
