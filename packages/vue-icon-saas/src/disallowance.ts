import { svg } from '@opentiny/vue-common'
import Disallowance from '@opentiny/vue-theme-saas/svgs/disallowance.svg'
import DisallowanceFilled from '@opentiny/vue-theme-saas/svgs/disallowance-filled.svg'

const iconFn = () => svg({ name: 'IconDisallowance', component: Disallowance, filledComponent: DisallowanceFilled })()
iconFn.__flag = { 'svgName': 'disallowance', 'hasFill': true }
export default iconFn
