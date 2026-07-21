import { svg } from '@opentiny/vue-common'
import Scissor from '@opentiny/vue-theme-saas/svgs/scissor.svg'
import ScissorFilled from '@opentiny/vue-theme-saas/svgs/scissor-filled.svg'

const iconFn = () => svg({ name: 'IconScissor', component: Scissor, filledComponent: ScissorFilled })()
iconFn.__flag = { 'svgName': 'scissor', 'hasFill': true }
export default iconFn
