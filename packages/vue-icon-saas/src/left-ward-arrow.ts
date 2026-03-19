import { svg } from '@opentiny/vue-common'
import LeftWardArrow from '@opentiny/vue-theme-saas/svgs/left-ward-arrow.svg'

const iconFn = () => svg({ name: 'IconLeftWardArrow', component: LeftWardArrow, filledComponent: LeftWardArrow })()

iconFn.__flag = { 'svgName': 'left-ward-arrow', 'hasFill': false }
export default iconFn
