import { svg } from '@opentiny/vue-common'
import ViewFlowchart from '@opentiny/vue-theme-saas/svgs/view-flowchart.svg'
import ViewFlowchartFilled from '@opentiny/vue-theme-saas/svgs/view-flowchart-filled.svg'

const iconFn = () =>
  svg({ name: 'IconViewFlowchart', component: ViewFlowchart, filledComponent: ViewFlowchartFilled })()
iconFn.__flag = { 'svgName': 'view-flowchart', 'hasFill': true }
export default iconFn
