import { svg } from '@opentiny/vue-common'
import DotChart from '@opentiny/vue-theme-saas/svgs/dot-chart.svg'
import DotChartFilled from '@opentiny/vue-theme-saas/svgs/dot-chart-filled.svg'

const iconFn = () => svg({ name: 'IconDotChart', component: DotChart, filledComponent: DotChartFilled })()
iconFn.__flag = { 'svgName': 'dot-chart', 'hasFill': true }
export default iconFn
