import { svg } from '@opentiny/vue-common'
import DeltaRight from '@opentiny/vue-theme-saas/svgs/delta-right.svg'

const iconFn = () => svg({ name: 'IconDeltaRight', component: DeltaRight, filledComponent: DeltaRight })()

iconFn.__flag = { 'svgName': 'delta-right', 'hasFill': false }
export default iconFn
