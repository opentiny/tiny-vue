import { svg } from '@opentiny/vue-common'
import Report from '@opentiny/vue-theme-saas/svgs/report.svg'
import ReportFilled from '@opentiny/vue-theme-saas/svgs/report-filled.svg'

const iconFn = () => svg({ name: 'IconReport', component: Report, filledComponent: ReportFilled })()
iconFn.__flag = { 'svgName': 'report', 'hasFill': true }
export default iconFn
