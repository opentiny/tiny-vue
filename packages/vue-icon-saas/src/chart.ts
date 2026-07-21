import { svg } from '@opentiny/vue-common'
import Chart from '@opentiny/vue-theme-saas/svgs/chart.svg'
import ChartFilled from '@opentiny/vue-theme-saas/svgs/chart-filled.svg'

const iconFn = () => svg({ name: 'IconChart', component: Chart, filledComponent: ChartFilled })()
iconFn.__flag = { 'svgName': 'chart', 'hasFill': true }
export default iconFn
