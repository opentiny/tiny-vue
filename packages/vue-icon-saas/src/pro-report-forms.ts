import { svg } from '@opentiny/vue-common'
import ProReportForms from '@opentiny/vue-theme-saas/svgs/pro-report-forms.svg'

const iconFn = () => svg({ name: 'IconProReportForms', component: ProReportForms, filledComponent: ProReportForms })()

iconFn.__flag = { 'svgName': 'pro-report-forms', 'hasFill': false }
export default iconFn
