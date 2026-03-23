import { svg } from '@opentiny/vue-common'
import Performance from '@opentiny/vue-theme-saas/svgs/performance.svg'
import PerformanceFilled from '@opentiny/vue-theme-saas/svgs/performance-filled.svg'

const iconFn = () => svg({ name: 'IconPerformance', component: Performance, filledComponent: PerformanceFilled })()
iconFn.__flag = { 'svgName': 'performance', 'hasFill': true }
export default iconFn
