import { svg } from '@opentiny/vue-common'
import PieChart from '@opentiny/vue-theme-saas/svgs/pie-chart.svg'
import PieChartFilled from '@opentiny/vue-theme-saas/svgs/pie-chart-filled.svg'

const iconFn = () => svg({ name: 'IconPieChart', component: PieChart, filledComponent: PieChartFilled })()
iconFn.__flag = { 'svgName': 'pie-chart', 'hasFill': true }
export default iconFn
