import { svg } from '@opentiny/vue-common'
import AnalysisTypeContainer from '@opentiny/vue-theme-saas/svgs/analysis-type-container.svg'
import AnalysisTypeContainerFilled from '@opentiny/vue-theme-saas/svgs/analysis-type-container-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAnalysisTypeContainer',
    component: AnalysisTypeContainer,
    filledComponent: AnalysisTypeContainerFilled
  })()
iconFn.__flag = { 'svgName': 'analysis-type-container', 'hasFill': true }
export default iconFn
