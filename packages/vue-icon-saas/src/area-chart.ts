import { svg } from '@opentiny/vue-common'
import AreaChart from '@opentiny/vue-theme-saas/svgs/area-chart.svg'
import AreaChartFilled from '@opentiny/vue-theme-saas/svgs/area-chart-filled.svg'

const iconFn = () => svg({ name: 'IconAreaChart', component: AreaChart, filledComponent: AreaChartFilled })()
iconFn.__flag = { 'svgName': 'area-chart', 'hasFill': true }
export default iconFn
