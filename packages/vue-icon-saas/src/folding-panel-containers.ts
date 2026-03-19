import { svg } from '@opentiny/vue-common'
import FoldingPanelContainers from '@opentiny/vue-theme-saas/svgs/folding-panel-containers.svg'
import FoldingPanelContainersFilled from '@opentiny/vue-theme-saas/svgs/folding-panel-containers-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconFoldingPanelContainers',
    component: FoldingPanelContainers,
    filledComponent: FoldingPanelContainersFilled
  })()
iconFn.__flag = { 'svgName': 'folding-panel-containers', 'hasFill': true }
export default iconFn
