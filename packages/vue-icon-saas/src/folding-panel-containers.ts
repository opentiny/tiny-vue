import { svg } from '@opentiny/vue-common'
import FoldingPanelContainers from '@opentiny/vue-theme-saas/svgs/folding-panel-containers.svg'
import FoldingPanelContainersFilled from '@opentiny/vue-theme-saas/svgs/folding-panel-containers-filled.svg'

export default () =>
  svg({
    name: 'IconFoldingPanelContainers',
    component: FoldingPanelContainers,
    filledComponent: FoldingPanelContainersFilled
  })()
