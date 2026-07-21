import { svg } from '@opentiny/vue-common'
import MonthView from '@opentiny/vue-theme-saas/svgs/month-view.svg'
import MonthViewFilled from '@opentiny/vue-theme-saas/svgs/month-view-filled.svg'

const iconFn = () => svg({ name: 'IconMonthView', component: MonthView, filledComponent: MonthViewFilled })()
iconFn.__flag = { 'svgName': 'month-view', 'hasFill': true }
export default iconFn
