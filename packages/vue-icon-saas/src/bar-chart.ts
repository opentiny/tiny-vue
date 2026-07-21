import { svg } from '@opentiny/vue-common'
import BarChart from '@opentiny/vue-theme-saas/svgs/bar-chart.svg'
import BarChartFilled from '@opentiny/vue-theme-saas/svgs/bar-chart-filled.svg'

const iconFn = () => svg({ name: 'IconBarChart', component: BarChart, filledComponent: BarChartFilled })()
iconFn.__flag = { 'svgName': 'bar-chart', 'hasFill': true }
export default iconFn
