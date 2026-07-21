import { svg } from '@opentiny/vue-common'
import NodeOpen from '@opentiny/vue-theme-saas/svgs/node-open.svg'
import NodeOpenFilled from '@opentiny/vue-theme-saas/svgs/node-open-filled.svg'

const iconFn = () => svg({ name: 'IconNodeOpen', component: NodeOpen, filledComponent: NodeOpenFilled })()
iconFn.__flag = { 'svgName': 'node-open', 'hasFill': true }
export default iconFn
