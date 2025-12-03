import { svg } from '@opentiny/vue-common'
import ReportSubmission from '@opentiny/vue-theme-saas/svgs/report-submission.svg'
import ReportSubmissionFilled from '@opentiny/vue-theme-saas/svgs/report-submission-filled.svg'

export default () =>
  svg({ name: 'IconReportSubmission', component: ReportSubmission, filledComponent: ReportSubmissionFilled })()
