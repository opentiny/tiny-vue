import { svg } from '@opentiny/vue-common'
import DeltaRightO from '@opentiny/vue-theme-saas/svgs/delta-right-o.svg'
import DeltaRightOFilled from '@opentiny/vue-theme-saas/svgs/delta-right-o-filled.svg'

const iconFn = () => svg({ name: 'IconDeltaRightO', component: DeltaRightO, filledComponent: DeltaRightOFilled })()
iconFn.__flag = { 'svgName': 'delta-right-o', 'hasFill': true }
export default iconFn
