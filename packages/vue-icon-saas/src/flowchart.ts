import { svg } from '@opentiny/vue-common'
import Flowchart from '@opentiny/vue-theme-saas/svgs/flowchart.svg'
import FlowchartFilled from '@opentiny/vue-theme-saas/svgs/flowchart-filled.svg'

const iconFn = () => svg({ name: 'IconFlowchart', component: Flowchart, filledComponent: FlowchartFilled })()
iconFn.__flag = { 'svgName': 'flowchart', 'hasFill': true }
export default iconFn
