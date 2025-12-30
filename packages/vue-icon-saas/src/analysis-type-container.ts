import { svg } from '@opentiny/vue-common'
import AnalysisTypeContainer from '@opentiny/vue-theme-saas/svgs/analysis-type-container.svg'
import AnalysisTypeContainerFilled from '@opentiny/vue-theme-saas/svgs/analysis-type-container-filled.svg'

export default () =>
  svg({
    name: 'IconAnalysisTypeContainer',
    component: AnalysisTypeContainer,
    filledComponent: AnalysisTypeContainerFilled
  })()
