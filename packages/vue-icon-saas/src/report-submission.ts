import { svg } from '@opentiny/vue-common'
import ReportSubmission from '@opentiny/vue-theme-saas/svgs/report-submission.svg'
import ReportSubmissionFilled from '@opentiny/vue-theme-saas/svgs/report-submission-filled.svg'

const iconFn = () =>
  svg({ name: 'IconReportSubmission', component: ReportSubmission, filledComponent: ReportSubmissionFilled })()
iconFn.__flag = { 'svgName': 'report-submission', 'hasFill': true }
export default iconFn
