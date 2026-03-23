import { svg } from '@opentiny/vue-common'
import DeltaDownO from '@opentiny/vue-theme-saas/svgs/delta-down-o.svg'
import DeltaDownOFilled from '@opentiny/vue-theme-saas/svgs/delta-down-o-filled.svg'

const iconFn = () => svg({ name: 'IconDeltaDownO', component: DeltaDownO, filledComponent: DeltaDownOFilled })()
iconFn.__flag = { 'svgName': 'delta-down-o', 'hasFill': true }
export default iconFn
