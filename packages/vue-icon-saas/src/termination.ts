import { svg } from '@opentiny/vue-common'
import Termination from '@opentiny/vue-theme-saas/svgs/termination.svg'
import TerminationFilled from '@opentiny/vue-theme-saas/svgs/termination-filled.svg'

const iconFn = () => svg({ name: 'IconTermination', component: Termination, filledComponent: TerminationFilled })()
iconFn.__flag = { 'svgName': 'termination', 'hasFill': true }
export default iconFn
