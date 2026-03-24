import { svg } from '@opentiny/vue-common'
import TreeMenuContainer from '@opentiny/vue-theme-saas/svgs/tree-menu-container.svg'
import TreeMenuContainerFilled from '@opentiny/vue-theme-saas/svgs/tree-menu-container-filled.svg'

const iconFn = () =>
  svg({ name: 'IconTreeMenuContainer', component: TreeMenuContainer, filledComponent: TreeMenuContainerFilled })()
iconFn.__flag = { 'svgName': 'tree-menu-container', 'hasFill': true }
export default iconFn
