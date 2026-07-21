import { svg } from '@opentiny/vue-common'
import Expand from '@opentiny/vue-theme-saas/svgs/expand.svg'

const iconFn = () => svg({ name: 'IconExpand', component: Expand, filledComponent: Expand })()

iconFn.__flag = { 'svgName': 'expand', 'hasFill': false }
export default iconFn
