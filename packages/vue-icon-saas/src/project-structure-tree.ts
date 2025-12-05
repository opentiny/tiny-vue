import { svg } from '@opentiny/vue-common'
import ProjectStructureTree from '@opentiny/vue-theme-saas/svgs/project-structure-tree.svg'
import ProjectStructureTreeFilled from '@opentiny/vue-theme-saas/svgs/project-structure-tree-filled.svg'

export default () =>
  svg({
    name: 'IconProjectStructureTree',
    component: ProjectStructureTree,
    filledComponent: ProjectStructureTreeFilled
  })()
