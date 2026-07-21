import { svg } from '@opentiny/vue-common'
import AICalendar from '@opentiny/vue-theme-saas/svgs/a-i-calendar.svg'
import AICalendarFilled from '@opentiny/vue-theme-saas/svgs/a-i-calendar-filled.svg'

const iconFn = () => svg({ name: 'IconAICalendar', component: AICalendar, filledComponent: AICalendarFilled })()
iconFn.__flag = { 'svgName': 'a-i-calendar', 'hasFill': true }
export default iconFn
