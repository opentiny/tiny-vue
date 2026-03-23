import { svg } from '@opentiny/vue-common'
import CalendarView from '@opentiny/vue-theme-saas/svgs/calendar-view.svg'
import CalendarViewFilled from '@opentiny/vue-theme-saas/svgs/calendar-view-filled.svg'

const iconFn = () => svg({ name: 'IconCalendarView', component: CalendarView, filledComponent: CalendarViewFilled })()
iconFn.__flag = { 'svgName': 'calendar-view', 'hasFill': true }
export default iconFn
