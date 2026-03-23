import { svg } from '@opentiny/vue-common'
import DeltaUp from '@opentiny/vue-theme-saas/svgs/delta-up.svg'

const iconFn = () => svg({ name: 'IconDeltaUp', component: DeltaUp, filledComponent: DeltaUp })()

iconFn.__flag = { 'svgName': 'delta-up', 'hasFill': false }
export default iconFn
