import { svg } from '@opentiny/vue-common'
import Tree from '@opentiny/vue-theme-saas/svgs/tree.svg'
import TreeFilled from '@opentiny/vue-theme-saas/svgs/tree-filled.svg'

const iconFn = () => svg({ name: 'IconTree', component: Tree, filledComponent: TreeFilled })()
iconFn.__flag = { 'svgName': 'tree', 'hasFill': true }
export default iconFn
