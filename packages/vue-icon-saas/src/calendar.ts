import { svg } from '@opentiny/vue-common'
import Calendar from '@opentiny/vue-theme-saas/svgs/calendar.svg'
import CalendarFilled from '@opentiny/vue-theme-saas/svgs/calendar-filled.svg'

const iconFn = () => svg({ name: 'IconCalendar', component: Calendar, filledComponent: CalendarFilled })()
iconFn.__flag = { 'svgName': 'calendar', 'hasFill': true }
export default iconFn
