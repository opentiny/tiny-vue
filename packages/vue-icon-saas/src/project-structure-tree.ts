import { svg } from '@opentiny/vue-common'
import ProjectStructureTree from '@opentiny/vue-theme-saas/svgs/project-structure-tree.svg'
import ProjectStructureTreeFilled from '@opentiny/vue-theme-saas/svgs/project-structure-tree-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconProjectStructureTree',
    component: ProjectStructureTree,
    filledComponent: ProjectStructureTreeFilled
  })()
iconFn.__flag = { 'svgName': 'project-structure-tree', 'hasFill': true }
export default iconFn
