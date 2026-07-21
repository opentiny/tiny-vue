import { svg } from '@opentiny/vue-common'
import DrawFlowchart from '@opentiny/vue-theme-saas/svgs/draw-flowchart.svg'
import DrawFlowchartFilled from '@opentiny/vue-theme-saas/svgs/draw-flowchart-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDrawFlowchart', component: DrawFlowchart, filledComponent: DrawFlowchartFilled })()
iconFn.__flag = { 'svgName': 'draw-flowchart', 'hasFill': true }
export default iconFn
