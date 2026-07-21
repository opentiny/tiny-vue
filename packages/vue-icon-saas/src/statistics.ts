import { svg } from '@opentiny/vue-common'
import Statistics from '@opentiny/vue-theme-saas/svgs/statistics.svg'
import StatisticsFilled from '@opentiny/vue-theme-saas/svgs/statistics-filled.svg'

const iconFn = () => svg({ name: 'IconStatistics', component: Statistics, filledComponent: StatisticsFilled })()
iconFn.__flag = { 'svgName': 'statistics', 'hasFill': true }
export default iconFn
