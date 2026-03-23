import { svg } from '@opentiny/vue-common'
import Floating from '@opentiny/vue-theme-saas/svgs/floating.svg'
import FloatingFilled from '@opentiny/vue-theme-saas/svgs/floating-filled.svg'

const iconFn = () => svg({ name: 'IconFloating', component: Floating, filledComponent: FloatingFilled })()
iconFn.__flag = { 'svgName': 'floating', 'hasFill': true }
export default iconFn
