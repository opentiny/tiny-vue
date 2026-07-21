import { svg } from '@opentiny/vue-common'
import Transform from '@opentiny/vue-theme-saas/svgs/transform.svg'
import TransformFilled from '@opentiny/vue-theme-saas/svgs/transform-filled.svg'

const iconFn = () => svg({ name: 'IconTransform', component: Transform, filledComponent: TransformFilled })()
iconFn.__flag = { 'svgName': 'transform', 'hasFill': true }
export default iconFn
