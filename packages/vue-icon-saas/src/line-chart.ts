import { svg } from '@opentiny/vue-common'
import LineChart from '@opentiny/vue-theme-saas/svgs/line-chart.svg'
import LineChartFilled from '@opentiny/vue-theme-saas/svgs/line-chart-filled.svg'

const iconFn = () => svg({ name: 'IconLineChart', component: LineChart, filledComponent: LineChartFilled })()
iconFn.__flag = { 'svgName': 'line-chart', 'hasFill': true }
export default iconFn
