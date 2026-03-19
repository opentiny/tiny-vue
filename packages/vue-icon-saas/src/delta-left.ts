import { svg } from '@opentiny/vue-common'
import DeltaLeft from '@opentiny/vue-theme-saas/svgs/delta-left.svg'

const iconFn = () => svg({ name: 'IconDeltaLeft', component: DeltaLeft, filledComponent: DeltaLeft })()

iconFn.__flag = { 'svgName': 'delta-left', 'hasFill': false }
export default iconFn
