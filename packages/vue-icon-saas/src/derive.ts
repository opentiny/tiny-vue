import { svg } from '@opentiny/vue-common'
import Derive from '@opentiny/vue-theme-saas/svgs/derive.svg'

const iconFn = () => svg({ name: 'IconDerive', component: Derive, filledComponent: Derive })()

iconFn.__flag = { 'svgName': 'derive', 'hasFill': false }
export default iconFn
