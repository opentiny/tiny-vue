import { svg } from '@opentiny/vue-common'
import DeltaDown from '@opentiny/vue-theme-saas/svgs/delta-down.svg'

const iconFn = () => svg({ name: 'IconDeltaDown', component: DeltaDown, filledComponent: DeltaDown })()

iconFn.__flag = { 'svgName': 'delta-down', 'hasFill': false }
export default iconFn
