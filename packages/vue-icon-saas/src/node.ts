import { svg } from '@opentiny/vue-common'
import Node from '@opentiny/vue-theme-saas/svgs/node.svg'

const iconFn = () => svg({ name: 'IconNode', component: Node, filledComponent: Node })()

iconFn.__flag = { 'svgName': 'node', 'hasFill': false }
export default iconFn
