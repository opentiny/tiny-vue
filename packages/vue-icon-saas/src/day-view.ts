import { svg } from '@opentiny/vue-common'
import DayView from '@opentiny/vue-theme-saas/svgs/day-view.svg'

const iconFn = () => svg({ name: 'IconDayView', component: DayView, filledComponent: DayView })()

iconFn.__flag = { 'svgName': 'day-view', 'hasFill': false }
export default iconFn
