import { svg } from '@opentiny/vue-common'
import DeltaLeftO from '@opentiny/vue-theme-saas/svgs/delta-left-o.svg'
import DeltaLeftOFilled from '@opentiny/vue-theme-saas/svgs/delta-left-o-filled.svg'

const iconFn = () => svg({ name: 'IconDeltaLeftO', component: DeltaLeftO, filledComponent: DeltaLeftOFilled })()
iconFn.__flag = { 'svgName': 'delta-left-o', 'hasFill': true }
export default iconFn
