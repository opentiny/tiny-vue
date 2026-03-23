import { svg } from '@opentiny/vue-common'
import Weaknet from '@opentiny/vue-theme-saas/svgs/weaknet.svg'

const iconFn = () => svg({ name: 'IconWeaknet', component: Weaknet, filledComponent: Weaknet })()

iconFn.__flag = { 'svgName': 'weaknet', 'hasFill': false }
export default iconFn
